<script>
    export let labelTitle = "FILTER HEADER"
    export let first = 'Filter1'
    export let second ='Filter2'
    export let third = 'Filter3'
    export let fourth = "Filter 4"
    const defaultOption = "Any"
    const options = [defaultOption, first, second, third, fourth]
    const values = []

    const toLower = () => {
        options.forEach(option => {
          values.push({
            option: option,
            lowerCased: option.toLowerCase()
          })  
        })
    }
    toLower()

</script>

<label class="text-Snow flex flex-col justify-center items-center font-Bespoke text-xl m-3">
    {labelTitle} 
    <select class="w-32 rounded-md bg-Onyx-Color text-lg my-3 font-Bespoke outline-none md:p-1" name on:change>
        {#each values as { option, lowerCased }}
            <option value={lowerCased}>{option}</option>
        {/each}
    </select>
</label>