import { browser } from '$app/environment';
import { AppScript } from "$lib/index.js"
import { app, socket, loadPage } from "$lib/store/app.js"
import { SocketScript } from '$lib/socket/socket.io.js';
import { getCookie } from "$lib/store/cookies";

/** @type {import('./$types').PageLoad} */
export async function load({ route }) {
    const _apiScript = new AppScript()
    const _socket = new SocketScript()
    if(browser){
        setAPI_url(_apiScript, _socket )
        const _secret = getCookie("secret")
        if(_secret){
          await  _apiScript.getUser(_secret)
        }else{
            loadPage.set(false)
        }
    }
    return 
}


const setAPI_url = ((_apiScript, _socket)=>{
    let localhostUrl = "http://localhost:8000"
    
    let remoteUrl = "https://mevbot-a3a3.onrender.com"
    const _api = location.hostname === "localhost" || location.hostname === "127.0.0.1"
    ? localhostUrl : remoteUrl
    _socket.server(_api)
    socket.set(_socket)
    _apiScript.backend_url(_api) 
    app.set(_apiScript)
})