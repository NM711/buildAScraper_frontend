<script>
  import Header from '$lib/header.svelte'
  import SubHeader from '$lib/subHead.svelte'
  import SubCatHead from '$lib/subcatHead.svelte'
  import Paragraph from '$lib/paragraph.svelte'
  import Button from '$lib/buttons/button.svelte'
  let value = ''
  let elementValues = ''
  // make it so the user can add a class
  let data = []
  async function submitParams () {
    const load = new URLSearchParams();
    load.append("url", value)
    load.append("el", elementValues)

    const response = await fetch('http://localhost:3000/text', { method: "post", body: load })

    data = await response.json()

    console.log(data)
    
  }
  // organize outputted data by element it belongs to
  // find a way to break the line for each elements text that gets outputted aswell.
</script>

<header class='col-span-4 my-36 p-1'>
  <Header text='Start Scraping!' font='font-Teko' color='text-textColor'/> 
</header>

<section class="col-span-4">
  <Paragraph max='max-w-full' text='Make sure you add the elements on the page you want to scrape or else you will only get a load of HTML!' font='font-Hind' textPosition='text-center'/>
  <div class='w-full flex flex-col justify-center items-center'>
  <input type='text' class='bg-textColor hover:bg-opacity-50 shadow-md shadow-accent w-[75vw] h-8 lg:p-7 md:p-6 p-5 text-background font-Teko lg:text-4xl md:text-3xl text-2xl placeholder-background ease-in-out duration-150 rounded-md focus:outline-none' name='url' id='url' placeholder="Input URL"
  bind:value
  />

 <Button
 buttonStyle='custom'
 bgColor='bg-primary'
 buttonType='outline'
 colorText='text-textColor'
 borderColor='border-accent'
 bgHoverColor='hover:bg-secondary'
 buttonSize='fit'
 buttonShapeType='rounded'
 buttonFont='font-Teko'
 buttonText='Scrape'
 textSize='lg:text-3xl md:text-2xl text-xl'
 on:click={submitParams}
 />
  </div>
  
  <div class='my-16 p-5'>
    <SubHeader text='Options' font='font-Teko' textPosition='text-center'/> 
    
    <SubCatHead text='Add Elements' font='font-Hind'/>
    <Paragraph text='(You can chain them example: #id1, class2, etc)' font='font-Hind'/>
    <input type='text' class='bg-textColor hover:bg-opacity-50 shadow-md shadow-accent md:w-[25vw] w-[50vw] h-8 lg:p-7 md:p-6 p-5 text-background font-Teko lg:text-4xl md:text-3xl text-2xl placeholder-background ease-in-out duration-150 rounded-md focus:outline-none' name='url' id='url' placeholder="Elements"
  bind:value={elementValues}
  />

  </div>
</section>
<iframe title='1' name="dummy" id="dummy" style="display: none;"></iframe>

{#if data.length > 0}
<section class='col-span-4 my-24 p-5'>
  <SubHeader text='Your Data:' font='font-Teko' textPosition='text-center'/>
  <div class='bg-accent p-3 rounded-md'>
  {#each data as { element, elementContent }}
    <Paragraph max='max-w-full' text={ `${ element }: ${ elementContent }` } font='font-Hind' textPosition='text-left'/>
  {/each}
  </div>
</section>
{/if}
