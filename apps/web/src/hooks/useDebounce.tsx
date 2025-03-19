import { useEffect, useState } from "react";

export type IUseDebouce = [string, (value: string) => void];

export const useDebounce = (initialValue: string): IUseDebouce => {
  const [query, setQuery] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedValue(query), 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return [debouncedValue, setQuery];
};
