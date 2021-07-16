# website

A brief explainer website for the California Integrated Travel Project (Cal-ITP) <https://calitp.org>.

## Development

This is a [Jekyll][jekyll] static site. We include a [Docker Compose][docker-compose] file to help with local testing
and development.

To run the site locally with `jekyll`:

```bash
bundle install
jekyll serve --force_polling --livereload
```

To run the site locally with `docker-compose`:

```bash
docker-compose up [-d] site
```

The site is running at <http://localhost:4000>. Auto rebuild/reload will be active and will watch the site files for changes. The optional `-d` flag will run the Jekyll container as a background process, freeing up your Terminal.

[docker-compose]: https://docs.docker.com/compose/
[jekyll]: https://jekyllrb.com
