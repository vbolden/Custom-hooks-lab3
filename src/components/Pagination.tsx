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

    // PAGE ARRAY FOR PAGE BUTTONS
    const pages = [];
    for(let i = 1; i < totalPages; i++) {
        pages.push(i);
    } 


    return (
        <div className="container">
            <div className="items">
                <label>Items Per Page
                    <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))} >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </label>

                <span>Total Items: <em>{items.length}</em></span>
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
                    <input type="number" value={1} id="page-select" />
                    of {totalPages}
                </label>
                <button onClick={nextPage} >Next</button>
            </div>
            <div className="page-info">
                <p>Showing {startIndex + 1}-{endIndex + 1} of {items.length} items</p>
            </div>
            <div className="page-numbers">
                {pages.map((page) => (
                    <button 
                    onClick={() => selectPage(page)}
                    disabled={currentPage === page}
                    style={{
                        fontWeight: currentPage === page ? "bold" : "normal"
                    }} >{page}</button>
                ))}
            </div>

        </div>
    )
}

export default Pagination;