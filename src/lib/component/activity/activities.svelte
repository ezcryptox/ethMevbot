<script>
    import { app } from "$lib/store/app.js";
    import { getFormattedDateTime, handleETHtoFIXED } from "$lib/util.js";
    import { onMount } from "svelte";
    $: transactions = []

    onMount(async()=>{
        const response = await $app?.fetchTransaction()
        transactions = response
    })

    function getLastElements(array, n) {
        // Ensure 'n' does not exceed the array length
        if (n > array.length) {
            n = array.length;
        }
        return array.slice(-n); // Get the last 'n' elements
    }


</script>

<div class="sc-iNpzLj hBFXqQ tb-bg">
    <table class="sc-gWXbKe iUeetX table sc-hFxENk iIwwcc is-hover">
        <thead>
            <tr>
                <td>Time</td>
                <td>Profit</td>
                <td>Status</td>
                <td>Transaction hash</td>
            </tr>
        </thead>
        <tbody>
            {#each getLastElements(transactions, 20) as trx}
                <tr class="">
                    <td style="cursor: auto;">
                        <div class="time font-semibold text-sm">{getFormattedDateTime(trx?.transaction?.timestamp)}</div>
                    </td>
                
                    <td class="sc-fZDhWb iNnwhW">
                        <div class="sc-Galmp erPQzq coin notranslate">
                            <div class="amount">
                                <span class="amount-str">{handleETHtoFIXED(trx?.transaction?.profit)}</span>
                            </div>
                        </div>
                    </td>
                    <td class="sc-cQYgkQ dNNmeg eHogsQ error" >
                        <div class="sc-Galmp erPQzq coin notranslate">
                            <div class="amount">
                                <span class="amount-str">
                                    {trx.status ? "Successful" : "Fail"}
                            </span>
                        </div>
                    </div>
                    </td>
                    <td style="cursor: auto;">
                        <div class="time">{trx?.transaction?.trnsactionHash}</div>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
    {#if !transactions.length}
        <div class="sc-fezjOJ jVnuYs">
            <div class="sc-eCImPb cuPxwd empty ">
                <img alt="" src="https://static.nanogames.io/assets/empty.acd1f5fe.png">
                <div class="msg">Oops! There is no data yet!</div>
            </div>
        </div>
    {/if}

</div>