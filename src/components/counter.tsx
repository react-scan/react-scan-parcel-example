import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Click me {count}
      </button>
    </div>
  );
};
