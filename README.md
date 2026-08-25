# Sales Pulse Design System

This repository publishes the governed static Design System reference from
[`creator-signal/sales-pulse`](https://github.com/creator-signal/sales-pulse).

## Publish

Run **Publish Design System Pages** from the Actions tab. By default it selects
the current `sales-pulse` `main` head. An optional SHA is accepted only when it
is that exact head. The workflow also requires a completed successful `CI` run
for the selected revision before it installs locked dependencies, builds the
Storybook at `/sales-pulse-design-system/`, exercises the static reference in a
real browser, and updates `gh-pages` without force-pushing.

The workflow uses this repository's bounded `GITHUB_TOKEN`; it does not require
a personal access token, cross-repository secret, or deploy key.

After the first successful publication, configure GitHub Pages to deploy from
the root of the `gh-pages` branch. The project site will then be available at
<https://creator-signal.github.io/sales-pulse-design-system/>.

The published Storybook is synthetic reference material. No Creator Signal
product runtime may depend on this site being available.
