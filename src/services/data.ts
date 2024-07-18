import axios from "axios"
export interface IPostResponse{
    count?: number
    posts?: any[]
}
class Blog{
    private _url_base = "https://www.googleapis.com/blogger/v3/blogs/1012595378128551940/"
    private _apiKey = "AIzaSyCUbCHfwnO1P8oRvK1iHASDBaByyvPuEmE"
    getAllData= async(typeSearch: string)=>{
        try{
          const response:any = await axios.get(`${this._url_base}${typeSearch}?key=${this._apiKey}`)
          const data:IPostResponse = {
            count: response.data.items.length,
            posts: response.data.items
          }  
          return data
        }catch(err){
            console.log(err)
        } 
    }
    getPosts = async()=>{
        const response:IPostResponse | undefined = await this.getAllData("posts")
        return response
    }
}
export const blogService = new Blog()