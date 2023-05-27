<script>
    export let color = "text-textColor"
    export let text = "Sub Header"
    export let textPosition = "text-left"
    export let font = ''
    export let maxW = ''
</script>

<h2 {...$$props} class="{maxW} md:my-10 my-5 lg:text-7xl md:text-6xl text-5xl {font} {color} {textPosition}">{text}</h2>
