const KEY = '?client_id=hcz6xZWxs3KHB_5es-lj_dz3VEiN4LaPa2HJgh6rMLM';
const URL = 'https://api.unsplash.com/photos';

const fetchImages = async page => {
    const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

const fetchImageStats = async id => {
    const response = await fetch(`${URL}/${id}/statistics${KEY}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export { fetchImages, fetchImageStats };
