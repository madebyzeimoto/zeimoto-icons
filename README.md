# zeimoto Icons

`zeimoto/icons` registers shared icons for the Kirby Panel through `index.js`.
It does not provide public frontend SVG assets or styles.

## Installation

Requires PHP 8.5 and Kirby 5.6.1 or later within Kirby 5.
The Composer package is `zeimoto/icons` and installs into
`site/plugins/zeimoto-icons`. Release versions come from Git tags.

Once published on Packagist:

```sh
composer require zeimoto/icons
```

For manual installation, copy this plugin into `site/plugins/zeimoto-icons`.
See the integration requirements below before using its public surfaces.
The plugin is distributed under the MIT license; see [LICENSE](LICENSE).

## Available icons

The kit's blueprints use these names:

| Name         | Use                          |
| ------------ | ---------------------------- |
| `main`       | Main content tabs            |
| `visibility` | Visibility and indexing tabs |
| `identity`   | Site identity tab            |
| `manifest`   | Web app manifest tab         |
| `entries`    | Entry-list tabs              |
| `socials`    | Social profile tab           |
| `media`      | Media tabs                   |
| `faqs`       | FAQ tabs                     |

Reference an icon by its name in a blueprint:

```yaml
icon: main
```

The plugin must be installed and enabled for these custom names to resolve.
Kirby loads its Panel JavaScript; there is no separate build step.

## Adding or updating icons

Edit the `icons` map in `index.js`. Each key is the name used by blueprints, and
each value is an SVG fragment, such as a `<path>` element, rather than a complete
`<svg>` document. Match the existing 24×24 coordinate space and allow the Panel
to control the icon color instead of hardcoding a fill color.

Choose a distinct name and check for collisions with Kirby's icons and other
installed plugins. Renaming a key requires updating its blueprint consumers.
Keep shared Panel icons here; frontend illustrations, logos, and social SVG
assets belong to their own frontend or branding surfaces.

After editing, check JavaScript syntax and refresh the Panel to verify the icon
at its actual display size in light and dark themes.
