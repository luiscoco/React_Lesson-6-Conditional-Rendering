import Item from "./Item.jsx";

const initialItems = [
  { id: 1, name: "Toothbrush", isPacked: true },
  { id: 2, name: "Towel", isPacked: false },
  { id: 3, name: "Passport", isPacked: true },
  { id: 4, name: "Phone Charger", isPacked: false },
  { id: 5, name: "Power Adapter", isPacked: false },
];

export default function ItemList({ hidePacked }) {
  return (
    <ul className="list">
      {initialItems.map((item) => (
        // 1️⃣ Conditional rendering with null (skip entirely when hidden & packed)
        hidePacked && item.isPacked ? null : (
          <Item key={item.id} name={item.name} isPacked={item.isPacked} />
        )
      ))}
    </ul>
  );
}