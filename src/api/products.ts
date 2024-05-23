const fetchProducts = async(params: { q: string, limit: number }) =>
{
    // PS: я знаком с библиотекой qs, но тут решил использовать просто URLSearchParams
    const qsSearchParams = URL_SEARCH_PARAMS_FORMATTER(params).toString()

    return await fetch(`https://dummyjson.com/products/search?${qsSearchParams}`)
        .then(res => res.json())
        .then(res => res)
        .catch(e => console.error('api/fetchProducts', e))
}

export default {
    fetchProducts,
}
