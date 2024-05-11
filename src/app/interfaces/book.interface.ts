export interface BookPage {
    content:          Book[];
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

export interface Book {
    id:        number;
    title:     string;
    slug:      string;
    desc:      null | string;
    price:     number;
    coverPath: null | string;
    filePath:  null | string;
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
