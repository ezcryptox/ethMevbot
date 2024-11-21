 <script>
      import { onMount } from "svelte";

// Set the target date (5 days from now)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 5);

// State to store the time remaining
let timeLeft = calculateTimeLeft();

// Function to calculate time remaining
function calculateTimeLeft() {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

// Update the countdown every second
onMount(() => {
  const interval = setInterval(() => {
    timeLeft = calculateTimeLeft();
  }, 1000);

  // Cleanup the interval on component unmount
  return () => clearInterval(interval);
});
 </script>
 
 <!-- ==================================================== -->
            <div class="break-inside-avoid xl:break-after-column mb-4">
                <div class="px-8 py-6 w-full bg-white !rounded-2xl !shadow-modal !border-0 undefined">
                    <div class="mb-4 text-center">
                        <h3 class="font-semibold text-app-gray-900  mb-1">Mevbot Services</h3>
                        <p class="text-xs text-app-gray-500 ">Make the best out of mevbot in seconds</p></div>
                        <img src="/media/nftSample-DbsbvZLt.svg" class="w-full max-w-xs mx-auto h-auto mb-6" alt="">
                        <div class="space-y-2 mb-4">
                            <button type="button" class="flex
                                rounded-md
                                h-[42px]
                                px-5
                                py-2.5
                                text-sm
                                items-center
                                justify-center
                                ease-linear
                                transition-all
                                duration-150
                                outline-none
                                bg-transparent
                                text-app-gray-800
                                border
                                border-app-gray-300
                                hover:bg-app-gray-200
                                active:bg-transparent
                                active:border-app-primary-600
                                active:ring-1
                                active:ring-app-primary-600
                                focus-visible:border-app-primary-600
                                focus-visible:bg-transparent
                                focus-visible:ring-1
                                focus-visible:ring-app-primary-600
                            w-full">Bot is running <span class="KJjehh"></span></button>
            <button type="button" class="flex
                rounded-md
                h-[42px]
                px-5
                py-2.5
                text-sm
                items-center
                justify-center
                ease-linear
                transition-all
                duration-150
                outline-none
                bg-transparent
                text-app-gray-800
                border
                border-app-gray-300
                hover:bg-app-gray-200
                active:bg-transparent
                active:border-app-primary-600
                active:ring-1
                active:ring-app-primary-600
                focus-visible:border-app-primary-600
                focus-visible:bg-transparent
                focus-visible:ring-1
                focus-visible:ring-app-primary-600
            w-full">{timeLeft.days}Day : {timeLeft.hours}Hrs : {timeLeft.minutes}Mins : {timeLeft.seconds}secs</button>
        </div>
    </div>
</div>

<style>
.KJjehh{
    background-color: rgb(20, 206, 20);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 5px;
}
</style>