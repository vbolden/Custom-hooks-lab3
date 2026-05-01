import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay: number = 500) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {

    }, [value, delay]);
}