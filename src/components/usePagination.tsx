import { useState } from "react";

type UsePaginationProps = {
    totalItems: number;
    itemsPerPage?: number;
    initialPage?: number;
}

function usePagination({
    totalItems = 100,
    itemsPerPage = 10,
    initialPage = 1,
}: UsePaginationProps) {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const totalPages = Math.ceil(totalItems / itemsPerPage); // CALCULATE HOW MANY PAGES ARE NEEDED FOR 100 ITEMS

    // CALCULATE INDEXES FOR PAGES
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage -1;

    // ITEMS ON CURRENT PAGE (MAINLY FOR LAST PAGE)
    const currentPageItems = Math.min(itemsPerPage, totalItems - startIndex);


    // NAVIGATION FUNCTIONS
    const nextPage = () => {
        setCurrentPage(prev => prev + 1)
    }

    const prevPage = () => {
        setCurrentPage(prev => prev + 1)
    }

    return {};
}

export default usePagination;