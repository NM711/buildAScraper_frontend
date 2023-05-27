<script>
  import Header from '$lib/header.svelte'
  import SubHead from '$lib/subHead.svelte'
  import SubCatHead from '$lib/subcatHead.svelte'
  import Paragraph from '$lib/paragraph.svelte'
  import Button from '$lib/buttons/button.svelte'
  import { goto } from '$app/navigation'
</script>

<header class='md:col-span-2 col-span-4 mt-36 p-5'>
  <Header text='Harvesting Has Never Been Easier!' color='text-textColor' font='font-Teko' textPosition='text-left'/>
 <Paragraph 
 text='Scraping static content has never been easier, in just a few steps you could scrape most static websites with this 100% free and open source piece of software.'
 color='text-textColor'
 font='font-Hind'
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
 buttonText='Check It Out!'
 textSize='lg:text-3xl md:text-2xl text-xl'
 on:click={() => goto('/scrape')}
 />
</header>

<div class='md:col-span-2 col-span-4'>
    <video class='w-fit border border-accent md:mt-36' autoplay>
        <source src='/banner.webm'>
    </video>
</div>

<section class='col-span-4 mt-36 p-5'>
    <SubHead text='Getting Started' font='font-Teko'/>

    <article class='grid grid-cols-4 auto-rows-auto'>
        <section class='md:col-span-2 col-span-4'>
            <SubCatHead text='1. Enter a valid URL' font='font-Teko'/>
            <Paragraph 
            max='max-w-3xl'
            text='Within the Input Box Enter a A valid URL in this case we will point to the scraping sand box as an example.'
            font='font-Hind'
            />
        </section>
        <img class='md:col-span-2 col-span-4 w-fit my-10 shadow shadow-accent' src='/Example_1.png' alt='example 1'>

     <section class='md:col-span-2 col-span-4'>
            <SubCatHead text='2. Enter a valid element' font='font-Teko'/>
            <Paragraph
            max='max-w-3xl'
            text='An html file is made up of elements, many elements have different ids and classes. All you need to do is simply open your dev tools look for a valid element on the page you are trying to scrape and, input the class in the "Add Elements" input box below the options section.'
            font='font-Hind'
            />
        </section>
        <img class='md:col-span-2 col-span-4 w-fit my-10 shadow shadow-accent' src='/Example_2.png' alt='example 2'/>
    <section class='md:col-span-2 col-span-4'>
            <SubCatHead text='3. And That is It!' font='font-Teko'/>
            <Paragraph 
            max='max-w-3xl'
            text='If you scroll down you will see a header that says "Your Data" and below you will see all the text of the elements you inputted, congratulations its that easy!'
            font='font-Hind'
            />
    </section>
        <img class='md:col-span-2 col-span-4 w-fit my-10 shadow shadow-accent' src='Example_3.png' alt='example 3'/>
    </article>
</section>
