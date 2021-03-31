const url = "";

export async function postPartyCall(data){
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    return response.json();
}