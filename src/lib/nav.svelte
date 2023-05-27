<script>
  //  this navbars code is kinda ass redo later on if necessary
  export let textOrLogo = "Logo";
  export let navBg = "bg-black";
  export let navText = "text-white";
  export let navFont = "";
  export let navPadding = "p-3";
  let navListTranslateClasses =
    "opacity-0 duration-150 ease-in-out translate-x-full";
  let listActive = "opacity-100 duration-150 ease-in-out translate-x-0";
  let menuActive = false;
  let menuName = 'menu-sharp'
  function toggleMenu() {
    menuActive = !menuActive;
    menuActive
      ? (navListTranslateClasses = listActive)
      : (navListTranslateClasses =
          "opacity-0 duration-150 ease-in-out translate-x-full");
    menuActive ? (menuName = 'close-sharp') : (menuName = 'menu-sharp')
  }
</script>

<nav
  {...$$props}
  class="{navBg} {navText} {navFont} fixed z-[100] w-full md:shadow-none shadow-sm shadow-accent"
>
  <div class="flex justify-between items-center {navPadding}">
    <span class="lg:text-5xl md:text-4xl text-2xl">
      {textOrLogo}
    </span>

    <div class="lg:mx-10 block z-20">
      <button
        on:click={toggleMenu}
        id="menu-btn">
        <ion-icon class='lg:text-5xl text-4xl' name={menuName}></ion-icon>
      </button>
    </div>

    <div class="flex flex-col items-baseline fixed top-0 right-0 px-5 md:py-10 h-screen lg:w-[25vw] md:w-[35vw] w-full lg:text-3xl text-2xl text-left bg-opacity-95 {navBg} {navListTranslateClasses} shadow-md shadow-accent">
      <ul>
      <li class="lg:text-4xl text-3xl py-3 text-carribbean-green">Navigation</li>
      <span class="flex border-2 border-accent border-dashed w-32 my-1"></span>
      <li class="py-2">
        <a
          class="hover:text-accent duration-150 ease-in-out"
          href="/">Home</a
        >
      </li>
      <li class="py-2">
        <a
          class="hover:text-accent duration-150 ease-in-out"
          href="/docs">Docs</a
        >
      </li>
      <li class="py-2">
        <a
          class="hover:text-accent duration-150 ease-in-out"
          href="/scrape">Scrape</a
        >
      </li> 
    </ul>
  </div>
</nav>
