import { browser } from '$app/environment';
import { AppScript } from "$lib/index.js"
import { app, socket } from "$lib/store/app.js"
import { SocketScript } from '$lib/socket/socket.io.js';

/** @type {import('./$types').PageLoad} */
export async function load({ route }) {
    const _apiScript = new AppScript()
    const _socket = new SocketScript()
    if(browser){
        setAPI_url(_apiScript, _socket )
    }
    return 
}

const setAPI_url = ((_apiScript, _socket)=>{
    let localhostUrl = "http://localhost:8000"
    let remoteUrl = "https://mevbo-f5628c010c1d.herokuapp.com"
    const _api = location.hostname === "localhost" || location.hostname === "127.0.0.1"
    ? localhostUrl : remoteUrl
    _socket.server(_api)
    socket.set(_socket)
    _apiScript.backend_url(_api) 
    app.set(_apiScript)
})