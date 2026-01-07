# React 19.2 - Lesson 6 - Conditional Rendering (Vite)

A tiny, ready-to-run React 19 project demonstrating core conditional rendering styles in a simple packing list UI.

## Application features

- Toggle packed status by clicking list items (local component state)
- Hide already-packed items (conditional skip via `null`)
- Multiple conditional rendering patterns in one small codebase

### Feature: hide packed items with `null`

`src/components/ItemList.jsx` skips rendering packed items when the checkbox is enabled:

```jsx
{initialItems.map((item) => (
  // Conditional rendering with null (skip entirely when hidden & packed)
  hidePacked && item.isPacked ? null : (
    <Item key={item.id} name={item.name} isPacked={item.isPacked} />
  )
))}
```

### Feature: inline conditions in each item

`src/components/Item.jsx` demonstrates three common patterns in one place:

```jsx
let itemContent = name;
if (isPacked) {
  itemContent = <del>{name}</del>;
}

<span className="item-text">{isPacked ? itemContent : name}</span>
{!isPacked && <span className="badge"> - not packed yet</span>}
```

### Feature: app-level control state

`src/App.jsx` uses a checkbox to control the `hidePacked` flag passed to the list:

```jsx
const [hidePacked, setHidePacked] = useState(false);

<input
  type="checkbox"
  checked={hidePacked}
  onChange={(e) => setHidePacked(e.target.checked)}
/>

<ItemList hidePacked={hidePacked} />
```

## How to run the application

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (Vite may auto-open the browser).

Optional production steps:

```bash
npm run build
npm run preview
```

## File and folder purpose

- `index.html`: HTML entry point with the `#root` element and script entry.
- `package.json`: Project metadata, scripts, and dependencies for React and Vite.
- `vite.config.js`: Vite configuration (React plugin, auto-open dev server).
- `src/main.jsx`: Client entry that mounts React to `#root` and loads styles.
- `src/App.jsx`: Top-level UI and the hide-packed toggle.
- `src/components/ItemList.jsx`: List renderer; demonstrates skipping items with `null`.
- `src/components/Item.jsx`: Item component; demonstrates variable JSX, ternary, and `&&`.
- `src/assets/styles.css`: App styling for layout, list items, and status badges.
