# Campus Connect — Design System Styles & Tokens

This directory contains the central styles, theme configurations, and design tokens for Campus Connect.

## Design Token Philosophy

We follow a **strict semantic tokens approach**.

- Custom components should **never** consume raw hex values, RGB values, or specific color palette scales (like blue-500).
- Components must consume **semantic tokens** (e.g. `--color-primary`, `--color-surface`, `--color-border`) so that layout elements naturally adjust when switching themes or during future visual brand updates.

---

## Directory Structure

```
src/styles/
├── tokens/
│   ├── colors.css        — Light mode warm-neutral & dark mode graphite color custom properties
│   ├── typography.css    — Font families (Inter/JetBrains Mono), scales, and line heights
│   ├── spacing.css       — Custom spacing and container widths
│   ├── radius.css        — Rounded corner options (sm, md, lg, xl)
│   ├── shadows.css       — Soft multi-layered shadow depths for light and dark modes
│   ├── transitions.css   — Animation timings and custom cubic-bezier easings
│   └── z-index.css       — Global z-index layers
├── index.css             — Main style entry point (imports Tailwind + all token files)
└── README.md             — Design system documentation (this file)
```

---

## Token Naming Conventions

All tokens are defined as CSS Custom Properties in Tailwind v4 `@theme` blocks:

1. **Variables**: Prefix all variables with `--color-`, `--radius-`, `--shadow-`, etc.
2. **Typography**: Size overrides and line-heights are paired as:
   - `--text-[name]` (e.g., `--text-body`)
   - `--text-[name]--line-height` (e.g., `--text-body--line-height`)
3. **Hierarchy**: Suffix tokens with hierarchical descriptors:
   - Default: `--color-primary`
   - Hover state: `--color-primary-hover`
   - Foreground text/icon: `--color-primary-foreground`

---

## Theme Architecture

Theme switching is completely runtime-driven and supports Light mode, Dark mode, and System preference.

- **Light Mode**: Default state defined under `:root` and explicitly backed by `[data-theme="light"]`. Styled with a **premium warm neutral** tone (off-white sand, creams, soft grays).
- **Dark Mode**: Configured under the `.dark` class and `[data-theme="dark"]` attribute. Styled with a **layered graphite** tone (charcoal, graphite, deep grays).
- **Attribute Support**: Class-based theme toggle enables CSS overrides on nested components, while `[data-theme]` attributes support clean HTML property selector targets.

---

## Adding Future Tokens

When extending or adding design tokens:

1. Locate the correct sub-concern in `tokens/` (e.g., `radius.css` for custom border radii).
2. Inside the `@theme` block, specify the custom CSS custom property.
3. If the property must change between dark and light themes (such as color or shadow values), define the default values in `@theme` (light values) and provide overrides inside the `.dark, [data-theme="dark"]` and `[data-theme="light"]` selectors.
