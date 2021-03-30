export default async function handler(req, res){
    let bRes = await fetch("api.dungeon.chat/new-cookie").then(response => response.json())
    return bRes;
}
