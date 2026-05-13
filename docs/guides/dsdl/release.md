# DSDL releases

## Publishing a release

The steps to create a release tag are identical to [Benefits](https://docs.calitp.org/benefits/guides/release/). Release candidate tags are skipped.

## Consuming a release

Referencing a specific [release](https://github.com/cal-itp/calitp.org/releases) via a link tag is recommended:

```html
<link
  rel="stylesheet"
  href="https://raw.githubusercontent.com/cal-itp/calitp.org/refs/tags/2026.03.1/src/stylesheets/dsdl/dsdl.css"
>
```

Loading bleeding-edge CSS (directly from [`main`](https://github.com/cal-itp/calitp.org/blob/main/src/stylesheets/dsdl/dsdl.css)) is _not_ recommended.

```html
<!-- don't do this -->
<link rel="stylesheet" href="https://www.calitp.org/stylesheets/dsdl/dsdl.css">
```
