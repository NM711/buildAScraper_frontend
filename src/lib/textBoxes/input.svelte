<script>
    export let inputType = "solid"
    export let inputStyle = "primary"
    export let inputBgColor = ""
    export let hoverBgColor = ""
    export let inputTextColor = "text-background"
    export let inputPlaceholderColor = "placeholder-background"
    export let inputShape = 'rounded'
    export let inputSize = "md"
    export let inputShadow = "shadow-sm shadow-accent"
    export let inputFont = "font-Teko"
    export let id = ""
    export let name = ""
    export let placeholder = 'Some Text'
    // make reactive var on parent component and pass it down to be equal to this
    export let value = '';
    export let labelColor = ""
    export let labelFont = ""
    export let label = true

    
    export let textSize;
    let shape;
    export let outline;
    export let size;
    export let labelSize;

    $: {

        // input types
       switch (inputType){
        case "solid":
            switch (inputStyle){
                case "primary":
                    inputBgColor = "bg-blue-500"
                    hoverBgColor = "hover:bg-blue-900"
                    outline = "focus:outline-blue-500"
                    break
                case "secondary":
                    inputBgColor = "bg-orange-500"
                    hoverBgColor = "hover:bg-orange-900"
                    outline = "focus:outline-orange-500"
                    break
                case "success":
                    inputBgColor = "bg-green-500"
                    hoverBgColor = "hover:bg-green-900"
                    outline = "focus:outline-green-500"
                    break
                case "error":
                    inputBgColor = "bg-red-500"
                    hoverBgColor = "hover:bg-red-900"
                    outline = "focus:outline-red-500"
                    break
                case "warning":
                    inputBgColor = "bg-yellow-500"
                    hoverBgColor = "hover:bg-yellow-900"
                    outline = "focus:outline-yellow-500"
                    break
                case "custom":
                    inputBgColor = inputBgColor
                    hoverBgColor = 'hover:bg-opacity-25'
                    outline = outline
                    break
            }
            break
       }


        // size and shape
        switch (inputSize){
        case "sm":
            size = "w-24 h-5"
            textSize = "text-sm"
            labelSize = "text-sm"
            break
        case "md":
            size = "w-36 h-8"
            textSize = "text-md"
            labelSize = "text-md"
            break
        case "lg":
            size = "w-42 h-10"
            textSize = "text-lg"
            labelSize = "text-lg"
            break
        case "xl":
            size = "w-72 h-12"
            textSize = "text-xl"
            labelSize = "text-xl"
            break
            // takes full width of the screen or container its within
        case "full":
            size = "w-full h-8"
            textSize = "text-4xl"
            labelSize = "text-4xl"
            break
        case "custom":
            size = size
            textSize = textSize
            labelSize = labelSize
        }

        switch (inputShape){
            case "squared":
                shape = "rounded-sm"
                break
            case "rounded":
                shape = "rounded-md"
                break
            case "pill":
                shape = "rounded-2xl"
                break 
        }

        // add types such as outline shadow solid etc like the buttons
    }
</script>
{#if label}
<label 
class="
{labelSize} 
{labelColor} 
{labelFont}" 
for={id}>
{name}
</label>
<br>
<input 
{...$$props}
 on:keydown
 on:keyup
 on:keypress
 on:input
 on:click
 {id}
 type="text"
 class="
 p-5
 focus:outline-accent
 hover:bg-opacity-25
 mx-auto
 ease-in-out
 duration-150
 {hoverBgColor}
 {outline}
 {inputBgColor}
 {inputPlaceholderColor} 
 {inputTextColor} 
 {inputFont}
 {size} 
 {shape}
 {textSize} 
 {inputShadow} "
 {name}
 {placeholder}
 bind:value 
 required>

{:else}
<!-- probably make a seperate input for emails or suthin -->
 <input 
 {...$$props}
 on:keydown
 on:keyup
 on:keypress
 on:input
 on:click
 type="text"
 {id}
 class="
 my-1
 px-3
 ease-in-out
 duration-150
 {hoverBgColor}
 {outline}
 {inputBgColor}
 {inputPlaceholderColor} 
 {inputTextColor} 
 {inputFont} 
 {size}
 {shape}
 {textSize} 
 {inputShadow}
 "
 {name} 
 {placeholder} 
 bind:value 
 required>
{/if}
