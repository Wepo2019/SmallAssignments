const ENDPOINT = 'http://localhost:4500/api/bosses';

const bossService = () => {
    return {
        getAllBosses: () => fetch(ENDPOINT).then(bs => bs.json()).then(bs => bs),
        getBossById: (id) => fetch(ENDPOINT + ":" + id).then(b => b.json()).then(b => b),
    };
};

export default bossService();