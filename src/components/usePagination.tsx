import { useState } from "react";

type UsePaginationProps = {
    totalItems: number;
    itemsPerPage?: number;
    initialPage?: number;
}

function usePagination({
    totalItems,
    itemsPerPage = 10,
    initialPage = 1,
}: UsePaginationProps) {
    const [currentPage, setCurrentPage] = useState(initialPage);
}

export default usePagination;