<script>
    import { Toaster } from 'svelte-sonner'
    import "../style/global.css"
    import Navbar from "$lib/navbar.svelte";
    import Nested from "$lib/component/wallet/nested.layout.svelte";
    import { page } from "$app/stores";
    import { searchUrl } from "$lib/store/app.js";
    import ShowActivities from '$lib/component/activity/showActivities.svelte';
    

    $: queryString = ""
    $: params = ""
    $: paramsObj = {}
    $: {
        queryString = $page.url.search
        params = new URLSearchParams(queryString);
        params.forEach((value, key) => {
            paramsObj[key] = value;
        });
        searchUrl.set(paramsObj)
    }
    $: show = false

</script>

<div id="root">
    <Toaster position="bottom-left" expand={false} richColors  />
    <div class="min-h-screen flex flex-col">
        <Navbar />
        <slot></slot>
    </div>
</div>
{#if  queryString}
    <Nested />
{/if}

