import { DescriptionMeliResponse, DetailMeliResponse } from "interfaces/meliResponses/detailResponse.interface";
import { SearchMeliResponse } from "interfaces/meliResponses/searchResponse.interface";
import { DetailResponse } from "interfaces/responses/detailResponse.interface";
import { SearchResponse } from "interfaces/responses/searchResponse.interface";

export const prepareSearchResponse = (meliResponse: SearchMeliResponse): SearchResponse => {
    const arrCategories =
        meliResponse?.filters?.find((filter) => filter.id === 'category')?.values
    return {
        author: {
            name: 'Oscar',
            lastname: 'Lora'
        },
        categories: (arrCategories) ? arrCategories.map((category) => category.name) : [],
        items: meliResponse?.results?.map((item) => {
            const priceString = `${item.price}`.split('.')
            return {
                id: item.id,
                city: item.address.city_name,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                picture: item.thumbnail,
                price: {
                    amount: +priceString[0],
                    currency: item.installments.currency_id,
                    decimals: +priceString[1] ?? 0
                },
                title: item.title,
            }
        })
    }
}

export const prepareDetailResponse = (
    item: DetailMeliResponse,
    description: DescriptionMeliResponse): DetailResponse => {
    const priceString = `${item.price}`.split('.')
    return {
        author: {
            name: 'Oscar',
            lastname: 'Lora'
        },
        item: {
            condition: item.condition,
            description: description.plain_text,
            free_shipping: item.shipping.free_shipping,
            id: item.id,
            picture: item.thumbnail,
            price: {
                amount: +priceString[0],
                currency: item.currency_id,
                decimals: +priceString[1] ?? 0
            },
            sold_quantity: item.sold_quantity,
            title: item.title
        }
    }
}