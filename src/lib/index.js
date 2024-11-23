import axios from "axios"
import { user } from "$lib/store/app.js"
import { toast } from 'svelte-sonner'
// Reexport your entry components here
export class AppScript{
    constructor(){
        this.isLogin = false
        this.user = {}
        this.url =  ""
        this.balanceInUSD = 0
        this.secret  = ""
    }
    async backend_url(url){
        this.url = url
    }

    async getUser(secret){
        this.secret = secret
        const path = "/api/profile/user";
        await axios.get(this.url + path,{
            headers:{
                Authorization: `Bearer ${secret}`
            }
        })
        .then((res)=>{
            user.set(res.data.user)
            this.balanceInUSD = res.data.balanceInUSD
        })
        .catch((error)=>{
          toast.error(error.response?.data?.error)
        })
    }

}