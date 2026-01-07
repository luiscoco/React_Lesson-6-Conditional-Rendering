# React 19.2 - Lesson 6 - Conditional Rendering (Vite)

A tiny, ready-to-run React 19 project demonstrating all core conditional rendering styles:
- `if` statements returning different JSX
- returning `null`
- inline ternary `? :`
- logical AND `&&`
- assigning JSX to a variable

## Quick Start

```bash
npm install
npm run dev
```

Then open the URL printed in your terminal (Vite will auto-open the browser).

## Explore

- Click items to toggle their `isPacked` state.
- Use the "Hide packed items" checkbox to see conditional *skipping* via `null`.
- Inspect components in `src/components`:
  - `ItemList.jsx`: uses `null` to skip rendering when packed + hidden
  - `Item.jsx`: shows variable-based JSX, ternary, and logical AND
