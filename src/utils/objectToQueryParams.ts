export const objectToQueryParams = (object: Object) => {
    const entries = Object.entries(object)
    let queryParams = ''
    entries.forEach(([key, value], index) => {
        if (index > 0) queryParams += '&'
        queryParams += `${key}=${value}`
    })
    return queryParams
}