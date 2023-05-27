<script>
    export let link = true
    export let color = "text-white"
    export let href = ""
    export let iconName = "logo-github"
    export let src = ''
</script>

{#if link}
    <a target="_blank" href={href}><ion-icon class="md:text-4xl text-3xl {color}" {src} name={iconName}></ion-icon></a>
{:else}
<ion-icon class="md:text-4xl text-3xl {color} p-1" {src} name={iconName}></ion-icon>
{/if}
