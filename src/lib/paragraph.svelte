<script>
  export let text = "paragraph text here"
  export let textPosition = 'text-left'
  export let color = 'text-textColor'
  export let font = ''
  export let max = 'max-w-6xl'
</script>

<p class="my-3 lg:text-2xl md:text-xl text-lg {font} {color} {textPosition} leading-relaxed {max}">
    {text}
</p> 
