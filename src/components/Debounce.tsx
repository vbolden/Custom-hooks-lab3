import { useState, useEffect } from "react";
import useDebounce from './useDebounce.tsx'

function Debounce() {
    const [input, setInput] = useState("")

    const debounceValue = useDebounce(input, 500);

    useEffect(() => {
        if (debounceValue) {

        }
    })

    return (
        <div>
            <p>Debounce Delay (ms): <input type="number" step={100} /> </p>

            <input
                type="text"
                placeholder="Type to search..."
                className="debounce-search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            
            <p>Current Input: {input}</p>
            <p>Debounced Value (after 600ms):</p>
            <p>Simulated Search Results: </p>
            <p>Type to see results.</p>
        </div>
    )
}

export default Debounce;