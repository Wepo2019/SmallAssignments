const ENDPOINT = 'http://localhost:4500/api/bosses';

const bossService = () => {
    return {
        getAllBosses: () => fetch(ENDPOINT).then(bs => bs.json()).then(bs => bs),
        getBossById: (id) => fetch(ENDPOINT + "/" + id).then(b => b.json()).then(b => b),
        postNewBoss: (newBoss) => { return fetch(ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBoss)
            }).then(resp => {
                console.log("inside resp");
                console.log(resp);
                if(resp.ok) { return resp.json(); }
                else { alert("Something went wrong while creating a new boss!"); }
            }).then( data => { if(data) return data })
        }
    };
};

export default bossService();