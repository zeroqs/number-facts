
export interface ServerResponse  {
    data: string;
    status: number;
    statusText: string;
    mode : string;
}

export interface Store  {
    fact: string;
    isFavorite: boolean;
}