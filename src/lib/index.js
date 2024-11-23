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
    }
    async backend_url(url){
        this.url = url
    }
    async getUser(detail){
        const path = "/api/profile/user";
        await axios.post(this.url + path, {detail})
        .then((res)=>{
            user.set(res.data.user)
            this.balanceInUSD = res.data.balanceInUSD
        })
        .catch((error)=>{
          toast.error(error.response?.data?.error)
        })
    }

}