<template >
<div class="contact">
    <router-link to="/">try linck</router-link>
    <h1
    @click="das"
    >contact</h1>
    <p>{{sa}}</p>
    <h2>dfdgdg</h2>
    <p>hi</p>
</div>
</template>
<script>
 import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
        sa: ''
    };
  },
  name: "",
  components: {},
  methods: {
        ...mapActions(["FUNCACTIONS"]),
       das(){
           this.sa = '123456789'
       } 
       },
  computed: { ...mapGetters(["GETERS"]) },
  async mounted() {
    this.FUNCACTIONS("params from hier in vuex");
  },
  props: {},
};
</script>
<style scoped >
</style>