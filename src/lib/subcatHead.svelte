<script>
    export let text = "Sub Cat Text or H3"
    export let color = "text-textColor"
    export let textPosition = "text-left"
    export let font = ''
</script>

<h3 {...$$props} class="my-3 underline decoration-accent decoration-4 lg:text-5xl md:text-4xl text-3xl {color} {textPosition} {font}">{text}</h3>
