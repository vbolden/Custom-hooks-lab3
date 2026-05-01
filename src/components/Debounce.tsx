import { useState, useEffect } from "react";
import  useDebounce  from './useDebounce.tsx'

function Debounce() {
    const [input, setInput] = useState("")

    const debounceValue = useDebounce(input, 500);

    useEffect(() => {
        if(debounceValue) {

        }
    })

    return (
        <div>
            <p>Debounce Delay (ms): </p>
            <input type="text" placeholder="Type to search..." className="debounce-search" />
            <p>Current Input</p>
            <p>Debounced Value (after 600ms):</p>
            <p>Simulated Search Results: </p>
            <p>Type to see results.</p>
        </div>
    )
}

export default Debounce;