import { writable } from "svelte/store";

let _user = {}
export let user = writable(_user)

let _app = {}
export let app = writable(_app)

let _searchUrl = {}
export let searchUrl = writable(_searchUrl)

let _socket = {}
export let socket = writable(_socket)