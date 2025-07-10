# calitp.org

A brief explainer website for the California Integrated Travel Project (Cal-ITP) <https://calitp.org>.

Deployed via [Netlify](https://www.netlify.com/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/71c28b11-ddb3-4a83-b4e7-04e77c918372/deploy-status)](https://app.netlify.com/projects/cal-itp-website/deploys)

## Development

This is a [Jekyll][jekyll] static site. We include a [Devcontainer][devcontainer] configuration to help with local testing
and development.

1. Open the repository directory in VS Code
1. `Ctrl/Cmd+Shift+P` to bring up the Command Palette
1. Enter `Remote-Containers` to filter the command list
1. Enter or select `Rebuild and Reopen in Container` to start from scratch
1. Enter or select `Reopen in Container` to reopen the last devcontainer used

Once inside the devcontainer, you have the manually start the site:

1. `Ctrl/Cmd+Shift+P` to bring up the Command Palette
1. Enter `Tasks: Run Task`
1. Enter or select `Jekyll: Build Dev`

The site is running on <http://127.0.0.1>; check the VS Code _Ports_ tab for the exact port. Auto rebuild/reload will be active
and will watch the site files for changes.

## Analytics

Site analytics is tracked by Google Analytics, version 4. Ask an administrator to grant you access.

## Resource Requests

We have a semi-automated way of handling resource requests via a Python script combined with the [`gh`](http://cli.github.com/) command.

```bash
gh issue view <issue num> --json body | python .github/scripts/resource-template.py
```

## License

Content (including graphics, images, video, documents, and text) in this repository is licensed under [CC-BY 4.0][content-license].

The source code in this repository used to format and display the content is licensed under [GPL-3.0][code-license].

[code-license]: ./LICENSE
[content-license]: https://creativecommons.org/licenses/by/4.0/
[devcontainer]: https://code.visualstudio.com/docs/remote/remote-overview
[jekyll]: https://jekyllrb.com
