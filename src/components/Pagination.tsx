import { useState } from "react";
import usePagination from "./usePagination";



function Pagination() {
    const items = [];
    for (let i = 1; i < 116; i++) {
        items.push("Item " + i);
    }

    const [itemsPerPage, setItemsPerPage] = useState(10);
    const {
        currentPage,
        totalPages,
        startIndex,
        endIndex,
        currentPageItems,
        nextPage,
        prevPage,
        selectPage
    } = usePagination({ totalItems: items.length, itemsPerPage, initialPage: 1 });

    const currentItems = items.slice(startIndex, endIndex + 1);


    return (
        <div className="container">
            <div className="items">
                <select onChange={(e) => setItemsPerPage(Number(e.target.value))} >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>

                <p>Total Items: <em>{items.length}</em></p>
            </div>

            <div className="items-list">
                <ol>
                    {currentItems.map((item) => (
                        <li>{item}</li>
                    ))}
                </ol>
            </div>
            <div className="page-controls">
                <button onClick={prevPage} >Previous</button>
                <label htmlFor="">
                    Page
                    <input type="number" value={1} />
                    of
                </label>
                <button onClick={nextPage} >Next</button>
            </div>
            <div className="page-info">
                <p>Showing 1-10 of 115 items</p>
            </div>
            <div className="page-numbers">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <span>...</span>
                <button>12</button>
            </div>

        </div>
    )
}

export default Pagination;