<script>
  import '../app.css'
  import Nav from '$lib/nav.svelte'
  import Footer from '$lib/footer.svelte'
</script>

<Nav
navBg='bg-background'
textOrLogo='BuildAScraper'
navFont='font-Teko'
/>

<section class='grid grid-cols-4 auto-rows-auto'>
  <slot/>
</section>

<Footer/>

<style>
:global(html) {
  background-color: #050a07;   
 }
:global(ion-icon) {
  visibility: visible;
}

@media(min-width: 768px){
  :global(a:hover:before) {
    width: 100%;
  }
  :global(a) {
    position: relative;
    display: inline-block;
    text-decoration: none;
    transition: 0.2s;
  }
  :global(a:hover) {
    text-decoration: none;
  }
  :global(a:before) {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    height: 7px;
    opacity: 0.5;
    background-color: #224930; 
    transition: 0.2s;
  }
}
</style>
