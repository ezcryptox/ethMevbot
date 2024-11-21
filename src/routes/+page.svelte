<script>
    import { page } from "$app/stores";
    import Activity from "$lib/component/activity/activity.layout.svelte";
    import Auth from "$lib/component/auth.svelte";
    import Mevbot from "$lib/component/mevbot/mevbot.layout.svelte";
    import User from "$lib/component/personal/user.svelte";
    import Wallet from "$lib/component/wallet/wallet.layout.svelte";
    import { onMount } from "svelte";
    import { app } from "$lib/store/app.js";

    onMount(async()=>{
        if($page?.data?.session){
            await $app.getUser($page?.data?.session)
        }
    })


</script>

<div>Home page</div>