

export const getGifs = async( categoria ) => {
    const URL = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=10&api_key=UoYKt97lY9rgmCUYt8xcSmlEJ7hRw8Pl`;
    const resp = await fetch( URL );
    const { data } = await resp.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    
    return gifs;
};