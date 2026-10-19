# victorhub-mobile-ui

A small, mobile-first CSS layer for VictorHub interfaces: design tokens
(colors, spacing, radii, typography) and a handful of components (buttons, cards,
lists, badges, bottom navigation) with no framework.

## Features

- Tokens in `tokens.css`, components in `components.css`.
- Fluid type with `clamp()`; touch targets at least 44px.
- Dark and light themes through `data-theme`.
- `demo.html` shows every component on a phone-sized viewport.
- A Node test checks that tokens and accessibility-critical rules exist.

## Installation

```bash
git clone https://github.com/victor-harden/victorhub-mobile-ui.git
cd victorhub-mobile-ui
npm test
```

## Usage

```html
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components.css">
<button class="vh-button">Save</button>
```

## Tests

```bash
npm test
```

## License

MIT — see [LICENSE](LICENSE).
