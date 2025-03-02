import json
import os
import re
import sys
import uuid

#
# Parse the issue body into JSON
#   (ported from https://github.com/GrantBirki/issue-template-parser)
#

def normalize_str(value, delimiter = '_'):
  sanitized = value.strip().lower()
  sanitized = re.sub(r'[^a-z0-9]', delimiter, sanitized)
  sanitized = re.sub(f'^{delimiter}+|{delimiter}+$', '', sanitized)
  sanitized = re.sub(f'{delimiter}+', delimiter, sanitized)

  return sanitized

def format_key(key):
  return normalize_str(key, '_')

def format_value(value):
  sanitized = value.strip()
  sanitized = re.sub(r'\r', '', sanitized)
  sanitized = re.sub(r'^[\n]+|[\n]+$', '', sanitized)

  # Handle empty responses
  if sanitized == 'None' or sanitized == '_No response_' or sanitized == '':
    return None

  # Handle a single line CSV
  if not "\n" in sanitized and ',' in sanitized:
    return [
      item.strip() for item in sanitized.split(',')
    ]

  # Handle a multi-lines without checkboxes and return it as a multi-line string
  for line in sanitized.split('\n'):
    if not line.startswith('- [x]') and not line.startswith('- [ ]'):
      return sanitized

  checkboxes = {
    'selected': [],
    'unselected': [],
  }

  for line in sanitized.split('\n'):
    if line.startswith('- [x]'):
      checkboxes['selected'].append(line[6:].strip())
    elif line.startswith('- [ ]'):
      checkboxes['unselected'].append(line[6:].strip())

  return checkboxes

def parse_issue_body(body):
  issueBodyRe = r'### *(?P<key>.*?)\s*[\r\n]+(?P<value>[\s\S]*?)(?=###|$)'
  matches = re.finditer(issueBodyRe, body)
  result = {}

  for match in matches:
    key = match.group('key').strip()
    value = match.group('value').strip()

    result[format_key(key)] = format_value(value)

  return result

def is_ci():
  return os.getenv('CI', 'false') == 'true'

def set_gha_output(name, value):
  # Utility function to set the output for GitHub Actions, with support for
  # multi-line values.
  #
  # https://github.com/orgs/community/discussions/28146#discussioncomment-5638014

  with open(os.environ['GITHUB_OUTPUT'], 'a') as fh:
    delimiter = uuid.uuid1()
    print(f'{name}<<{delimiter}', file=fh)
    print(value, file=fh)
    print(delimiter, file=fh)

#
# Utility functions for I/O operations
#

FILENAME_CHAR_LIMIT = 255
FILENAME_EXTENSION = '.md'
NEWLINE = "\n"
CATEGORY_PREFIXES = {
  'Case studies': 'case-study',
  'Fact sheets & overviews': 'fact-sheet',
}

def get_file_prefix(category):
  if category in CATEGORY_PREFIXES:
    return CATEGORY_PREFIXES[category]

  raise NotImplementedError(f'Category {category} is not supported')

def build_filename(prefix, title):
  working_title = normalize_str(title, '-')
  filename = f'{prefix}-{working_title}'

  # Some file systems have a filename character limit, so truncate if necessary
  if len(filename) > FILENAME_CHAR_LIMIT:
    last_index = filename.rfind('-', 0, FILENAME_CHAR_LIMIT - len(FILENAME_EXTENSION))
    filename = filename[:last_index]

  return f'{filename}.md'

def create_resource(filename, content):
  with open(f'src/_resources/{filename}', 'w') as file:
    file.write(content)

def main():
  if len(sys.argv) > 1:
    input_str = sys.argv[1]
  else:
    input_str = sys.stdin.read()

  json_data = json.loads(input_str)
  issue = parse_issue_body(json_data['body'])

  filename = build_filename(get_file_prefix(issue['category']), issue['title'])
  content = f"""
---
date: "{issue['date_year']}-{issue['date_month']}-01T00:00:00-07:00"
title: "{issue['title']}"
asset: "{issue['asset_url']}"
category: "{issue['category']}"
tags:
{NEWLINE.join(f'  - {tag}' for tag in issue['tag'])}
---
""".lstrip()

  create_resource(filename, content)

  if not is_ci():
    print(f'Created resource: {filename}')
    print('')
    print(f'Follow the instructions in the file to complete the resource creation.')
    print(f'  1. Download the following file: {issue["asset_url"]}')
    print(f'  2. Add the downloaded file to the `src/assets/` directory')
    print(f'  3. Update the `asset` field in the created resource (above) to the filename of the newly added resource')
  else:
    set_gha_output('resource_filename', filename)

if __name__ == '__main__':
  main()
