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
    async initializeBot(data, userId){
        const path = "/api/profile/activate/"+userId;
        await axios.post(this.url + path,{data},{
            headers:{
                Authorization: `Bearer ${this.secret}`
            }
        })
        .then((res)=>{
            toast.success("Mevbot has been initialized")
            setInterval(()=>{
                location.href = "/"
            },2000)
        })
        .catch((error)=>{
          toast.error(error.response?.data?.error)
        })
    }
     truncateMiddle(str, maxLength) {
        if (maxLength <= 3) {
            return str.length > maxLength ? `${str.slice(0, maxLength - 1)}...` : str;
        }
        if (str.length <= maxLength) {
            return str;
        }
        const half = Math.floor((maxLength - 3) / 2);
        const start = str.slice(0, half);
        const end = str.slice(str.length - half);
        return `${start}...${end}`;
    }
    
    async copyToClipboard(secret){
        try {
            await navigator.clipboard.writeText(secret);
            toast.success('Copied to clipboard');
        } catch (err) {
            toast.error('Failed to copy');
        }
    }
}