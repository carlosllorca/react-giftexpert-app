export const getGifts = async (category) => {
    const token = 't040gZE8Yvsqrl3AvP6kQqWNF4q0qtNe';
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${token}`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifts = data.map(({id, title,images}) => {
        return {id, title, url:images?.downsized_medium.url}
    });
    return gifts
}