<script>
    export let labelFont = ''
    export let labelColor = ''
    export let value = ''
    export let name = 'radio'
    export let id = 'radioButton'
    export let group;
    export let btnSize = 'md'
    export let color = "primary"
    export let radioColor = ''
    let labelSize = ""
    let radioSize = ""
    $: {
        switch (color) {
            case "primary":
                radioColor = "accent-blue-500"
                break
            case "secondary":
                radioColor = "accent-orange-500"
                break
            case "success":
                radioColor = "accent-green-500"
                break
            case "error":
                radioColor = "accent-red-500"
                break
            case "warning":
                radioColor = "accent-yellow-500"
                break
            case "custom":
                radioColor = radioColor
                break
        }
        switch (btnSize){
            case "sm":
                radioSize = "h-3 w-3"
                labelSize = "text-sm"
                break
            case "md":
                radioSize = "h-5 w-5"
                labelSize = "text-md"
                break
            case "lg":
                radioSize = "h-8 w-8"
                labelSize = "text-lg"
                break
            case "xl":
                radioSize = "h-10 w-10"
                labelSize = "text-xl"
            break
            case "2xl":
                radioSize = "h-12 w-12"
                labelSize = "text-2xl"
            break
        }
    }
</script>
<div class="flex items-center">
      <input
      {...$$props}
      on:input
      on:change
      bind:group={group}
      class="
      m-3
      {radioColor}
      {radioSize}"
      {value}
      {id}
      {name}
      type="radio"
    />
    <label {...$$props} class="{labelSize} {labelFont} {labelColor}" for={id}>
        <slot/>
    </label>
</div>