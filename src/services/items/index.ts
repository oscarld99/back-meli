import fetch from 'node-fetch';
import { hostName } from '../../config/index'
import { SearchMeliResponse } from '../../interfaces/meliResponses/searchResponse.interface';
import { QueryParams } from 'interfaces/items.interface';
import { objectToQueryParams } from '../../utils/objectToQueryParams';
import { prepareDetailResponse, prepareSearchResponse } from '../../helpers/prepareSearchResponse';
import { DescriptionMeliResponse, DetailMeliResponse } from 'interfaces/meliResponses/detailResponse.interface';

export const findItemByQuery = async (queryParams: QueryParams) => {
    try {
        const params = objectToQueryParams(queryParams)
        const response = await fetch(`${hostName}/sites/MLA/search?${params}`);
        const data: SearchMeliResponse = await response.json();
        return prepareSearchResponse(data)
    } catch (error) {
        console.log('Error en findItemByQuery')
        throw error
    }
}

export const findItemByProductId = async (productId: string) => {
    try {
        const arrPromises = [
            fetch(`${hostName}/items/${productId}`),
            fetch(`${hostName}/items/${productId}/description`)
        ]
        const [item, description] = await Promise.all(arrPromises)
        const dataItem: DetailMeliResponse = await item.json();
        const itemDescription: DescriptionMeliResponse = await description.json();
        return prepareDetailResponse(dataItem, itemDescription)
    } catch (error) {
        console.log('Error en findItemByProductId')
        throw error
    }
}