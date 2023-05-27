<script>
   export let frontendBtn = ''
   export let backendBtn = ''
</script>

<div class='font-Khand md:text-2xl text-xl flex justify-center items-center my-10'>
    <button on:click={frontendBtn} class="text-carribbean-green outline-double outline-white hover:bg-black hover:text-white hover:outline-none ease-in-out duration-200 rounded-md mx-2 p-2">
        Frontend
    </button>

    <button on:click={backendBtn} class="text-carribbean-green outline-double outline-white hover:bg-black hover:text-white hover:outline-none ease-in-out duration-200 rounded-md mx-2 p-2">
        Backend
    </button>
</div>