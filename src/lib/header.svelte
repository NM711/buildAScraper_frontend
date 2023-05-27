<script>
    export let text = 'Header'
    export let color = "text-textColor"
    export let textPosition = "text-center"
    export let font = ''
</script>

<h1 {...$$props} class="lg:text-8xl md:text-7xl text-6xl {font} {color} {textPosition}">{text}</h1>
