<template>
  <div id="app">
   
     <navla/>
    <router-view/>
  </div>
</template>
<script>
import navla from './layout/mainla'
export default {
  name: 'app',
  components: {
    navla
  }
}
</script>

<style lang="scss">

</style>
