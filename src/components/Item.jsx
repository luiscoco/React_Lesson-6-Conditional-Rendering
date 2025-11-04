import { useState } from "react";

export default function Item({ name, isPacked: initialPacked }) {
  const [isPacked, setIsPacked] = useState(initialPacked);

  // 2️⃣ Assign JSX to a variable for flexibility
  let itemContent = name;
  if (isPacked) {
    itemContent = (
      <del>
        {name} ✅
      </del>
    );
  }

  return (
    <li
      className={`item ${isPacked ? "packed" : ""}`}
      onClick={() => setIsPacked(!isPacked)}
      title="Click to toggle packed"
    >
      {/* 3️⃣ Ternary operator for compact rendering */}
      <span className="item-text">{isPacked ? itemContent : name}</span>

      {/* 4️⃣ Logical AND to append a note */}
      {!isPacked && <span className="badge">&nbsp;— not packed yet</span>}
    </li>
  );
}