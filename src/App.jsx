import { useState } from "react";
import ItemList from "./components/ItemList.jsx";

export default function App() {
  const [hidePacked, setHidePacked] = useState(false);

  return (
    <div className="container">
      <header className="header">
        <h1>🎒 My Packing List</h1>
        <p className="subtitle">
          React 19 + Vite — Conditional Rendering playground
        </p>
      </header>

      <section className="controls">
        <label className="checkbox">
          <input
            type="checkbox"
            checked={hidePacked}
            onChange={(e) => setHidePacked(e.target.checked)}
          />
          Hide packed items
        </label>
      </section>

      <ItemList hidePacked={hidePacked} />

      <footer className="footer">
        <small>
          Try clicking items to toggle <code>isPacked</code>. Explore how
          different conditional styles change the UI.
        </small>
      </footer>
    </div>
  );
}