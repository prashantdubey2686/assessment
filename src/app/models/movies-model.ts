export interface Movies {
    count: number;
    next: string;
    previous: string;
    results: Movie[];
}

export interface Movie {
    title: string;
    description: string;
    genres: string;
    uuid: string;

}