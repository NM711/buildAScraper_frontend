<script>
    export let inputSize = "sm"
    let size = ''

    $: {
        switch(inputSize){
            case "sm":
                break
            case "md":
                break
            case "lg":
                break
            case "xl":
                break
            case "2xl":
                break
        }
    }
</script>



<input 
type="file"
class="
{size}
"
/>