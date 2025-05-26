#!/usr/bin/env python3
import argparse
import os

def validate_date_format(file_path, regex):
    """
    Validate the date format in the given file.
    """

    with open(file_path, 'r') as file:
        for line_number, line in enumerate(file, start=1):
            if line[:5] == "date:":
                timestamp = line[5:].strip().strip('"\'')

                if not regex.match(timestamp):
                    print(f'Timestamp {timestamp} is invalid; {file_path}:{line_number}')
                    return False

                break

    return True

def main():
    parser = argparse.ArgumentParser(description="Validate date format in files.")
    parser.add_argument('files', nargs='+', help='List of files to validate')
    parser.add_argument('--regex', nargs='?', default=r'^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$', help='Regex pattern for date validation')

    args = parser.parse_args()

    import re
    regex = re.compile(args.regex)

    for file_path in args.files:
        if not os.path.isfile(file_path):
            continue

        if not validate_date_format(file_path, regex):
            return 1

    return 0

if __name__ == "__main__":
    raise SystemExit(main())
