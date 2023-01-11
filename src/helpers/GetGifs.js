export const getGif = async (category) => {
    const API_KEY = 'MfBQwqamlDUKLRmE40QxmWR9xzsgZ3dF';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gif = data.map((item) => ({
        id: item.id,
        title: item.title,
        url: item.images.downsized_medium.url
    }));

    return gif;
}