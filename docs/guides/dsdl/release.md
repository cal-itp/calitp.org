# DSDL releases

## Publishing a release

The steps to create a release tag are identical to [Benefits](https://docs.calitp.org/benefits/guides/release/). Release candidate tags are skipped.

After a release has been published, it is necessary to identify the associated Netlify deployment and document the release's permalink on this page.

## Consuming a release

Referencing a specific [release](https://github.com/cal-itp/calitp.org/releases) via a link tag is recommended:

### `2026.05.01`
```html
<link
  rel="stylesheet"
  href="https://6a0e339e78e8ea00086cacb6--cal-itp-website.netlify.app/stylesheets/dsdl/dsdl.css"
>
```

Loading bleeding-edge CSS (directly from [`main`](https://github.com/cal-itp/calitp.org/blob/main/src/stylesheets/dsdl/dsdl.css)) is _not_ recommended.

```html
<!-- don't do this -->
<link rel="stylesheet" href="https://www.calitp.org/stylesheets/dsdl/dsdl.css">
```
