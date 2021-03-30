export default async function handler(req, res){
    let bRes = await fetch("api.dungeon.chat/new-cookie").then(response => res.status(200).json(response.json());
}
