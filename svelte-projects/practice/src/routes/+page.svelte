<script>
    let count = 0
    function countClick(){
        count++
    }
    function resetClick(){
        count--
    }
</script>

<style>
    
</style>

<h1>{count}</h1>
<button on:click={function(){count++}}>+</button>
<button on:click={resetClick}>-</button>
