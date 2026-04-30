function Items() {
    return(
        <div className="container">
            <div className="items">
                <select>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>

                <p>Total Items: <em>120</em></p>
            </div>

            <div>
                <ol>
                    <li>Item 1</li>
                </ol>
            </div>

        </div>
    )
}

export default Items;