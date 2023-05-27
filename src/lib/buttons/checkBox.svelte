<script>
export let id = ''
export let value = ''
// export let checked = ''
export let group = []
export let name = ''
export let labelFont = ''
export let labelColor = ''
export let checkBoxSize = "md"
export let color = 'primary'
export let checkBoxColor = ""
let labelSize = ''
let size = ''

function whenValueIsChanged({ target }){
    const { value, checked } = target
    if (checked){
        group = [...group, value]
    }
    else {
        group = group.filter(item => item !== value)
    }
}

$: {
    switch (color){
        case "primary":
            checkBoxColor = "accent-blue-500"
            break
        case "secondary":
            checkBoxColor = "accent-orange-500"
            break
        case "success":
            checkBoxColor = "accent-green-500"
            break
        case "error":
            checkBoxColor = "accent-red-500"
            break
        case "warning":
            checkBoxColor = "accent-yellow-500"
            break
        case "custom":
            checkBoxColor = checkBoxColor
            break
    }
    switch (checkBoxSize){
        case "sm":
            size = "h-3 w-3"
            labelSize = "text-sm"
            break
        case "md":
            size = "h-5 w-5"
            labelSize = "text-md"
            break
        case "lg":
            size = "h-8 w-8"
            labelSize = "text-lg"
            break
        case "xl":
            size = "h-10 w-10"
            labelSize = "text-xl"
            break
        case "2xl":
            size = "h-12 w-12"
            labelSize = "text-2xl"
            break
    }
}
</script>

<div class="flex items-center">
    <input 
    {...$$props}
    checked={group.includes(value)}
    on:change={whenValueIsChanged}
    on:change
    on:input
    {value}
    {id}
    {name}
    type="checkbox"
    class="
    m-2
    {checkBoxColor}
    {size}"
    >
    <label {...$$props} class="{labelSize} {labelFont} {labelColor}" for={id}>
        <slot/>
    </label>
</div>