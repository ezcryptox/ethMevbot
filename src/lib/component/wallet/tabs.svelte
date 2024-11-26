<script>
    import { createEventDispatcher } from "svelte";

    $: tab = 1
    const dispatch = createEventDispatcher();
    const settingEl = ((e)=>{
        dispatch("select",e)
        tab = e
    })
</script>


<div class="my-2 w-full @sm/wallet:hidden">
    <div class="mx-auto w-fit flex gap-2 py-3 px-4 bg-app-light-surface1 dark:bg-app-dark-surface4 rounded-full shadow-lg">
  
            <button on:click={()=> settingEl(1)} data-v-09480cf0="" href="" class="size-md t-btn {tab === 1 ? "t-btn-primary" : "t-btn-tertiary"} rounded-full !h-[52px] !w-16 !p-0 !rounded-[20px] flex-col items-center justify-center !text-[10px] !leading-none" type="button" >
                <!---->
                <div class="mb-1">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5" style="width: 20px; height: 20px;">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.83317 1.33594H9.1665C10.9346 1.33594 12.6303 2.03832 13.8805 3.28856C15.1308 4.5388 15.8332 6.23449 15.8332 8.0026C15.8332 8.87808 15.6607 9.74499 15.3257 10.5538C14.9907 11.3627 14.4996 12.0976 13.8805 12.7167C13.2615 13.3357 12.5266 13.8268 11.7177 14.1618C10.9089 14.4968 10.042 14.6693 9.1665 14.6693H7.83317C4.15127 14.6693 1.1665 11.6845 1.1665 8.0026C1.1665 4.32071 4.15127 1.33594 7.83317 1.33594ZM9.1665 2.66927C7.75202 2.66927 6.39546 3.23117 5.39527 4.23137C4.39507 5.23156 3.83317 6.58812 3.83317 8.0026C3.83317 8.70299 3.97112 9.39651 4.23915 10.0436C4.50717 10.6907 4.90002 11.2786 5.39527 11.7738C5.89051 12.2691 6.47846 12.6619 7.12552 12.93C7.77259 13.198 8.46612 13.3359 9.1665 13.3359C9.86689 13.3359 10.5604 13.198 11.2075 12.93C11.8546 12.6619 12.4425 12.2691 12.9377 11.7738C13.433 11.2786 13.8258 10.6907 14.0939 10.0436C14.3619 9.39651 14.4998 8.70299 14.4998 8.0026C14.4998 6.58812 13.9379 5.23156 12.9377 4.23137C11.9375 3.23117 10.581 2.66927 9.1665 2.66927ZM7.28089 6.11699C7.78098 5.61689 8.45926 5.33594 9.1665 5.33594C9.87375 5.33594 10.552 5.61689 11.0521 6.11699C11.5522 6.61708 11.8332 7.29536 11.8332 8.0026C11.8332 8.3528 11.7642 8.69956 11.6302 9.02309C11.4962 9.34663 11.2997 9.6406 11.0521 9.88822C10.8045 10.1358 10.5105 10.3323 10.187 10.4663C9.86346 10.6003 9.5167 10.6693 9.1665 10.6693C8.81631 10.6693 8.46955 10.6003 8.14601 10.4663C7.82248 10.3323 7.52851 10.1358 7.28089 9.88822C7.03326 9.6406 6.83684 9.34663 6.70282 9.02309C6.56881 8.69956 6.49984 8.3528 6.49984 8.0026C6.49984 7.29536 6.78079 6.61708 7.28089 6.11699ZM9.1665 4.0026C8.10564 4.0026 7.08822 4.42403 6.33808 5.17418C5.58793 5.92432 5.1665 6.94174 5.1665 8.0026C5.1665 8.52789 5.26997 9.04804 5.47099 9.53334C5.672 10.0186 5.96664 10.4596 6.33808 10.831C6.70951 11.2025 7.15047 11.4971 7.63577 11.6981C8.12107 11.8991 8.64122 12.0026 9.1665 12.0026C9.69179 12.0026 10.2119 11.8991 10.6972 11.6981C11.1825 11.4971 11.6235 11.2025 11.9949 10.831C12.3664 10.4596 12.661 10.0186 12.862 9.53334C13.063 9.04804 13.1665 8.52789 13.1665 8.0026C13.1665 6.94174 12.7451 5.92432 11.9949 5.17418C11.2448 4.42403 10.2274 4.0026 9.1665 4.0026Z" fill="currentColor"></path>
                    </svg>
                </div>
                <p class="w-9/12 text-ellipsis overflow-x-clip overflow-y-visible">Tokens</p>
            </button>
   
  
            <button on:click={()=> settingEl(2)} data-v-09480cf0="" href="" class="size-md t-btn {tab === 2 ? "t-btn-primary" : "t-btn-tertiary"} rounded-full !h-[52px] !w-16 !p-0 !rounded-[20px] flex-col items-center justify-center !text-[10px] !leading-none" type="button" >
                <!---->
                <div class="mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-5" style="width: 20px; height: 20px;">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0"></path>
                    </svg>
                </div>
                <p class="w-9/12 text-ellipsis overflow-x-clip overflow-y-visible">Activity</p>
            </button>
        
 
            <button on:click={()=> settingEl(3)} data-v-09480cf0="" href="" class="size-md t-btn {tab === 3 ? "t-btn-primary" : "t-btn-tertiary"}  rounded-full !h-[52px] !w-16 !p-0 !rounded-[20px] flex-col items-center justify-center !text-[10px] !leading-none" type="button" >
                <!---->
                <div class="mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-5" style="width: 20px; height: 20px;">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.675 4.317c-.426-1.756-2.924-1.756-3.35 0a1.723 1.723 0 0 1-2.572 1.065c-1.544-.94-3.31.827-2.37 2.37a1.724 1.724 0 0 1-1.066 2.573c-1.756.426-1.756 2.924 0 3.35a1.725 1.725 0 0 1 1.065 2.572c-.94 1.544.827 3.31 2.37 2.37a1.724 1.724 0 0 1 2.573 1.066c.426 1.756 2.924 1.756 3.35 0a1.725 1.725 0 0 1 2.572-1.065c1.544.94 3.31-.827 2.37-2.37a1.725 1.725 0 0 1 1.066-2.573c1.756-.426 1.756-2.924 0-3.35a1.724 1.724 0 0 1-1.065-2.572c.94-1.544-.827-3.31-2.37-2.37a1.724 1.724 0 0 1-2.573-1.066"></path>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121A3 3 0 1 0 9.88 9.88a3 3 0 0 0 4.242 4.242Z"></path>
                    </svg>
                </div>
                <p class="w-9/12 text-ellipsis overflow-x-clip overflow-y-visible">Settings</p>
            </button>
    </div>
</div>

