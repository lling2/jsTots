export interface API {
    getList:    GetList[];
    getDetails: GetDetails;
    login:      Login[];
}

export interface GetDetails {
}

export interface GetList {
    id:     number;
    title:  string;
    author: string;
}

export interface Login {
    username?:    string;
    currentPage?: number;
    id:           number;
}

export interface API {
    getList:    GetList[];
    getDetails: GetDetails;
    login:      Login[];
}

export interface GetDetails {
}

export interface GetList {
    id:     number;
    title:  string;
    author: string;
}

export interface Login {
    username?:    string;
    currentPage?: number;
    id:           number;
}
