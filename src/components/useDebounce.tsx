import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay: number = 500) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        // VALUE CHANGES START A TIMER
        const timer = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        // CLEAR TIMER
        return () => {
           clearTimeout(timer)
        }

    }, [value, delay]);

    return debounceValue;
}

export default useDebounce;