export const getAnimeResponse = async(resource, query) => {
    const queryString = query ? `?${query}` : "";  
    // const server = "kuramanime"
    const endPoint = "api/v1"
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${endPoint}/${resource}`)
    const anime = await response.json()
    return anime
}