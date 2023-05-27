<script>
  import SubCatHead from "$lib/subcatHead.svelte";
  import Paragraph from "$lib/paragraph.svelte";
  import Icon from "$lib/icon.svelte";
  export let headerText = 'Beach Front'
  export let paraText = 'Para Here'
  export let iconName = ''
  export let iconColor = 'text-white'
</script>

<div class='bg-secondary w-full lg:max-w-lg max-w-md h-96 rounded-md mx-3 my-3 p-3 shadow-text shadow-md'>
  <SubCatHead font='font-archivo' text={headerText} textPosition='text-center'/>
  <span class='flex justify-center items-center'>
    <Icon link={false} {iconName} color={iconColor}/>
  </span>
  <Paragraph text={paraText} font='font-archivo' textPosition="text-center"/> 
</div>
