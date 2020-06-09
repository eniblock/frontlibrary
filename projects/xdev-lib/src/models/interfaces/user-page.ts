import {User} from './user';

export interface UserPage {
    content: User[];
    pageable: {
        sort: {
            unsorted: boolean,
            sorted: boolean,
            empty: boolean
        },
        offset: number,
        pageNumber: number,
        pageSize: number,
        paged: boolean,
        unpaged: boolean
    };
    totalElements: number;
    totalPages: number;
    last: boolean;
    size: number;
    numberOfElements: number;
    first: boolean;
    number: number;
    sort: {
        unsorted: boolean,
        sorted: boolean,
        empty: boolean
    };
    empty: boolean;
}
