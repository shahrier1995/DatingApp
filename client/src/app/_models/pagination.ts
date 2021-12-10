export interface Pagination{
    currentPage:number;
    itemSize:number;
    itemsPerPage:number;
    totalItems:number;
}

export class PaginatedResult<T>{
    result: T;
    pagination:Pagination;
}