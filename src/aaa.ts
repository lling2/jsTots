export interface APIConfig {
    version: string;
    apis:    Apis;
}

export interface Apis {
    userinfo: Userinfo[];
    store:    Store[];
}

export interface Store {
    method:        string;
    path:          string;
    description:   string;
    requestParams: StoreRequestParams;
    response:      Response;
}

export interface StoreRequestParams {
    id:   DateClass;
    date: DateClass;
}

export interface DateClass {
    required:    boolean;
    type:        string;
    description: string;
    example:     string;
    in:          string;
}

export interface Response {
    successful: Successful;
}

export interface Successful {
    required: boolean;
    type:     string;
}

export interface Userinfo {
    method:        string;
    path:          string;
    description:   string;
    requestParams: UserinfoRequestParams;
    response:      Response;
}

export interface UserinfoRequestParams {
    uid?:  DateClass;
    name?: DateClass;
    age?:  Age;
}

export interface Age {
    required:    boolean;
    type:        string;
    description: string;
    example:     number;
    in:          string;
}
