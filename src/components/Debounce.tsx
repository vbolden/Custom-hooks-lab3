import { useState, useEffect } from "react";
import useDebounce from './useDebounce.tsx'

function Debounce() {
    const [input, setInput] = useState("");
    const [delay, setDelay] = useState(500);

    const debounceValue = useDebounce(input, delay);

    useEffect(() => {
        if (debounceValue) {
            console.log("Searching for:", debounceValue);
        }
    }, [debounceValue])

    return (
        <div>
            <p>Debounce Delay (ms):
                <input
                    type="number"
                    step={100}
                    min={0}
                    value={delay}
                    onChange={(e) => setDelay(Number(e.target.value))}
                    onKeyDown={(e) => e.preventDefault()}
                     />
            </p>

            <input
                type="text"
                placeholder="Type to search..."
                className="debounce-search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <p>Current Input: {input}</p>
            <p>Debounced Value (after {delay}ms): {debounceValue}</p>

            <p>Simulated Search Results:</p>
            <span>
                {debounceValue
                    ? `Result for "${debounceValue}"`
                    : "Type to see results"}
            </span>

        </div>
    )
}

export default Debounce;