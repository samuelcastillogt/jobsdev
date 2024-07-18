// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { blogService } from "@/services/data";
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try{
    const response:any = await blogService.getAllData("posts")
    console.log(response)
    res.status(200).send(response);
  }catch(err){
    console.log(err) 
    res.status(500)
  }
}
