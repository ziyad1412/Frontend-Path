import { useState, useEffect } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    increment(); // Tambahkan 1 saat pertama kali dipakai (contoh: views)
  }, []);

  return [count, increment];
}

export default useCounter;
