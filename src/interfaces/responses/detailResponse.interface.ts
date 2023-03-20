import { Author } from "./searchResponse.interface";

export interface DetailResponse {
    author: Author;
    item: ItemDetail;
}

export interface ItemDetail {
    id: string;
    title: string;
    price: PriceDetail;
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
}

export interface PriceDetail {
    currency: string;
    amount: number;
    decimals: number;
}
