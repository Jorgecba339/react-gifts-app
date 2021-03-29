export const getGifts = async( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=YRDES9Pyatun3I2kXQpKgtAeM1qhwkjo`;
    const res = await fetch( url );
    const {data} = await res.json();

    const gift = data.map( img => {
        return {
            id : img.id,
            title : img.title,
            url : img.images?.downsized_medium.url
        }
    })

    return gift;
}