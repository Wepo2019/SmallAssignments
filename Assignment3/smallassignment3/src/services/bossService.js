const ENDPOINT = 'http://localhost:4500/api/bosses';

const bossService = () => {
    return {
        getAllBosses: () => fetch(ENDPOINT).then(bs => bs.json()).then(bs => bs),
        getBossById: id => fetch(ENDPOINT + "/" + id).then(b => b.json()).then(b => b),
        postNewBoss: newBoss => { return fetch(ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBoss)
            }).then(resp => {
                if(resp.ok) { return resp.json(); }
                else { alert("Something went wrong while creating a new boss!: " + resp.status); }
            }).then( data => { if(data) return data })
        },
        deleteBossById: id => fetch(ENDPOINT + "/" + id, {
            method: 'DELETE'
        }).then(resp => {
            if(resp.ok) { return id }
            else { alert("Someting went wrong when deleting this boss!: " + resp.status); }
        }),
        patchBossById: (id, info) => fetch(ENDPOINT + "/" + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        }).then(resp => {
            if(resp.ok) { console.log("Success!"); return {id: id, ...info} }
            else { alert("Something went wrong while changing this boss!: " + resp.status); }
        })
    };
};

export default bossService();