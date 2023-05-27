<script>
    export let textareaPlaceholder = "Input Text Here"
    export let textareaClasses = "resize-none rounded-md outline-none px-1"
    export let textAreaShadow = "shadow-sm shadow-white"
    export let textAreaWidthAndHeight = "h-56 w-[50vw]"
    export let textareaColor = "bg-[#27272A]"
    export let textColor = "text-textWhite placeholder-textWhite" // fonts, color, and other stuff for text and placeholder
    export let textSize = "md:text-xl text-lg"
    export let textFont = "font-Fira_Sans_Condensed"
    export let textareaName = "Message"
    export let labelClasses = "md:text-xl text-lg"
    export let label = true
    export let value = ''
</script>

<div class="flex flex-col">
    {#if label}
    <label class="{labelClasses}" for="{textareaName}">{textareaName}:</label>
    <textarea {...$$props} id="{textareaName}" class="{textareaClasses} {textAreaWidthAndHeight} 
    {textareaColor} {textAreaShadow} {textColor} {textSize} {textFont}"
    name="{textareaName}" placeholder="{textareaPlaceholder}" bind:value required></textarea>
    {:else}
    <textarea {...$$props} id="{textareaName}" class="{textareaClasses} {textAreaWidthAndHeight} 
    {textareaColor} {textAreaShadow} {textColor} {textSize} {textFont}"
    name="{textareaName}" placeholder="{textareaPlaceholder}" bind:value></textarea>
    {/if}
</div>