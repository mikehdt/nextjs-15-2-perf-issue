"use client";

import { useState } from "react";

const fakeListValues = [
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqr",
  "stu",
  "vwx",
  "yz0",
  "123",
  "456",
  "789",
  "0ab",
];

const TestRow = ({ toggleHighlight, highlights }) => (
  <div className="flex p-4 border border-green-300 my-2">
    {fakeListValues.map((item) => (
      <span
        key={item}
        className={`${
          highlights.includes(item) ? "bg-green-100" : ""
        } block px-2 py-1 cursor-pointer border border-green-600 rounded mx-1`}
        onClick={() => toggleHighlight(item)}
      >
        {item}
      </span>
    ))}
  </div>
);

export default function Page() {
  const [highlights, setHighlights] = useState([]);

  const toggleHighlight = (item) => {
    const itemIdx = highlights.indexOf(item);

    if (itemIdx === -1) {
      setHighlights([...highlights, item]);
    } else {
      setHighlights([
        ...highlights.slice(0, itemIdx),
        ...highlights.slice(itemIdx + 1),
      ]);
    }
  };

  return [...Array(250)].map((_item, idx) => (
    <TestRow
      key={idx}
      toggleHighlight={toggleHighlight}
      highlights={highlights}
    />
  ));
}
