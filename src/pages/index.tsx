import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios"
import { blogService } from "@/services/data";
import { IPostResponse } from "@/services/data";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [posts, setPosts] = useState<IPostResponse|undefined>(undefined)
  const adios = async()=>{
    const response:IPostResponse | undefined = await blogService.getPosts()
    console.log(response)
    setPosts(response)
  }
  useEffect(()=>{
    adios()
  },[])
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h2>Hola mundo</h2>
    </main>
  );
}
