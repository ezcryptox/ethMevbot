<script>
    import { page } from "$app/stores";
    import Activity from "$lib/component/activity/activity.layout.svelte";
    import Auth from "$lib/component/auth.svelte";
    import Mevbot from "$lib/component/mevbot/mevbot.layout.svelte";
    import User from "$lib/component/personal/user.svelte";
    import Wallet from "$lib/component/wallet/wallet.layout.svelte";
    import Loader from "$lib/loader.svelte";
    import { user, loadPage} from "$lib/store/app.js";

</script>

{#if !$loadPage}
    {#if !$user}
    <Auth />
    {:else}
    <div class="flex-grow flex py-4 px-4 sm:py-6 sm:px-10">
        <div class="w-full columns-1 sm:columns-2 lg:columns-3 xl:columns-4 break-before-avoid mx-auto">
        <!-- ================================================ -->
            <User />
            <Wallet />
            <Mevbot />
            <Activity />
        </div>  
    </div>
    {/if}
{:else}
<Loader />
{/if}
