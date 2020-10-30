<template >
<div class="comforcont">
   <button
    @click.prevent="$emit('pushdata',fas)"
     class="but">try try</button>
</div>
</template>
<script>
export default {
data(){
 return {
     fas: 23
 }


},
name:'',
 components:{},
methods:{
   clickon() {
    this.$emit("pushdata")
  }
},
computed:{},
props:{},
}
</script>
<style scoped >
.but{
    padding: 8px 30px;
    background-color: rgb(37, 49, 223);
    color: #fff;
    border-radius: 10px;



}
</style>