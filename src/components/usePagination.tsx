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
        setCurrentPage(prev => Math.min(prev + 1, totalPages))
    }

    const prevPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1))
    }

    const selectPage = (page: number) => {
        setCurrentPage(page)
    }

    return {currentPage, totalPages, startIndex, endIndex, currentPageItems, nextPage, prevPage, selectPage};
}

export default usePagination;