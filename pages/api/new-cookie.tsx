import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    let bRes = await fetch("api.dungeon.chat/new-cookie").then(response => res.status(200).json(response.json()));
}
