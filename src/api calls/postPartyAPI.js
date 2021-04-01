const url = "localhost:3000/";

export async function postPartyCall(data){
    const info = {
        title: data.title,
        place: data.place,
        address: data.address,
        date: data.date,
        time: data.time,
        number: data.number,
        price: data.price,
        drinks: data.drinks,
        description: data.description
    }
    const formData = new FormData()
    const json = JSON.stringify(info);
    const blob = new Blob([json], {
        type: 'application/json'
    });
    formData.append('data', blob);
    formData.append('image', data.image);

    fetch(`${url}/parties`, {
        method: 'POST',
        body: formData
    }).then(response => {
        return response.json();
    })
        .catch(err => console.log(err));
}
