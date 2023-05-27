<script>
  // customizable values
  export let buttonText = "Button";
  export let buttonFont = "";
  export let iconActive = false;
  export let colorText = "";
  export let bgHoverColor = "";
  export let textColorHover = "";
  export let borderColor = "";
  export let bgColor = "";
  // preset variables
  let buttonTransition = "hover:translate-y-1";
  let bgHoverOpacity = "";
  let shape = "";
  export let textSize = "";
  let buttonHeight = "h-5";
  let buttonWidth = "w-24";

  // this is so the user specifies the kind of button he wants
  export let type = "button"; // the user can change to submit if necessary
  export let buttonType = "solid";
  export let buttonStyle = "primary";
  export let buttonShapeType = "squared";
  export let buttonSize = "md";
  $: {
    // outline colors
    switch (buttonType) {
      // solid
      case "solid":
        colorText = "text-[#fbfffd]";
        bgHoverColor = "";
        textColorHover = "";
        switch (buttonStyle) {
          case "primary":
            bgColor = "bg-blue-500";
            break;
          case "secondary":
            bgColor = "bg-orange-500";
            break;
          case "success":
            bgColor = "bg-green-500";
            break;
          case "error":
            bgColor = "bg-red-500";
            break;
          case "warning":
            bgColor = "bg-yellow-500";
          case "custom":
            bgColor = bgColor;
        }
        break;

      // outline
      case "outline":
        bgColor = 'bg-primary';
        textColorHover = "hover:text-[#fbfffd]";
        switch (buttonStyle) {
          case "primary":
            colorText = "text-blue-500";
            bgHoverColor = "hover:bg-blue-500";
            borderColor = "border-blue-500";
            break;
          case "secondary":
            colorText = "text-orange-500";
            bgHoverColor = "hover:bg-orange-500";
            borderColor = "border-orange-500";
            break;
          case "success":
            colorText = "text-green-500";
            bgHoverColor = "hover:bg-green-500";
            borderColor = "border-green-500";
            break;
          case "error":
            colorText = "text-red-500";
            bgHoverColor = "hover:bg-red-500";
            borderColor = "border-red-500";
            break;
          case "warning":
            colorText = "text-yellow-500";
            bgHoverColor = "hover:bg-yellow-500";
            borderColor = "border-yellow-500";
            break;
          // // CUSTOM COLORS WORK IN PROGRESS
          case "custom":
            colorText = colorText;
            bgHoverColor = bgHoverColor;
            borderColor = borderColor;
            break;
        }
        break;

      case "ghost":
        bgColor = "bg-[#fbfffd]";
        bgHoverOpacity = "hover:bg-opacity-25";
        borderColor = "border-transparent";
        switch (buttonStyle) {
          case "primary":
            bgHoverColor = "hover:bg-blue-500";
            colorText = "text-blue-500";
            break;
          case "secondary":
            bgHoverColor = "hover:bg-orange-500";
            colorText = "text-orange-500";
            break;
          case "success":
            bgHoverColor = "hover:bg-green-500";
            colorText = "text-green-500";
            break;
          case "error":
            bgHoverColor = "hover:bg-red-500";
            colorText = "text-red-500";
            break;
          case "warning":
            bgHoverColor = "hover:bg-yellow-500";
            colorText = "text-yellow-500";
            break;
          case "custom":
            bgHoverColor = bgHoverColor;
            colorText = colorText;
        }
    }

    switch (buttonShapeType) {
      case "squared":
        shape = "rounded-sm";
        break;
      case "rounded":
        shape = "rounded-md";
        break;
      case "pill":
        shape = "rounded-2xl";
        break;
    }

    switch (buttonSize) {
      case "sm":
        textSize = "text-sm";
        buttonHeight = "h-fit";
        break;
      case "md":
        textSize = "text-md";
        buttonHeight = "h-10";
        break;
      case "lg":
        textSize = "text-lg";
        buttonHeight = "h-12";
        break;
      case "xl":
        textSize = "text-xl";
        buttonHeight = "h-16";
        break;
      case "fit":
        textSize = textSize;
        buttonHeight = "h-fit";
        buttonWidth = "w-fit";
        break;
      case "full":
        textSize = "text-xl";
        buttonHeight = "h-10";
        buttonWidth = "w-full";
    }
  }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<button
  {...$$props}
  on:mouseover
  on:mouseout
  on:click
  {type}
  class="
{bgColor} 
{colorText} 
{textColorHover}
border
{borderColor}
{bgHoverColor}
{bgHoverOpacity}
{buttonFont} 
{buttonWidth} 
{buttonHeight}
{buttonTransition}
{textSize}
my-5
p-3
{shape}
duration-150
ease-in-out"
>
  {#if iconActive}
    <slot />
  {:else}
    <b>{buttonText}</b>
  {/if}
</button>
