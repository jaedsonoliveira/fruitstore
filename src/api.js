let BASE = 'https://www.fruityvice.com';

export default {
    getProducts:async () => {
        const res = await fetch(BASE + '/api/fruit/all');
        const json = await res.json();
        return json;
    }
}