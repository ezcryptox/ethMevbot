import axios from "axios"

// Reexport your entry components here
export class AppScript{
    constructor(){
        this.isLogin = false
        this.user = {}
        this.url =  ""
    }
    backend_url(url){
        this.url = url
    }
    async getUser(detail){
        const path = "/api/profile/user";
        await axios.post(this.url + path, {detail})
        .then((res)=>{
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}