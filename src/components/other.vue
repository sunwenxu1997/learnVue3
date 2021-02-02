<template>
 <h1>123</h1>
</template>

<script>
export default {
data(){
    return{
        color:'red'
    }
}
}
</script>

<style vars="{color}" >
h2{
    color: var(--color);
}
</style>