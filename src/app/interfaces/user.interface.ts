export interface UserPage {
    content:          User[];
    pageable:         Pageable;
    last:             boolean;
    totalElements:    number;
    totalPages:       number;
    size:             number;
    number:           number;
    sort:             Sort;
    first:            boolean;
    numberOfElements: number;
    empty:            boolean;
}

export interface User {
    id:        number;
    firstName: string;
    lastName:  string;
    fullName:  string;
    email:     string;
    password:  string;
    role:      string;
    createdAt: Date;
    updatedAt: Date | null;
}

export interface Pageable {
    pageNumber: number;
    pageSize:   number;
    sort:       Sort;
    offset:     number;
    unpaged:    boolean;
    paged:      boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}
