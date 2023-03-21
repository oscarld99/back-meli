export interface SearchResponse {
    author: Author;
    categories: string[];
    items: Item[];
}

export interface Author {
    name: string;
    lastname: string;
}

export interface Item {
    city: string;
    condition: string;
    free_shipping: boolean;
    id: string;
    picture: string;
    price: Price;
    title: string;
}

export interface Price {
    currency: string;
    amount: number;
    decimals: number;
}