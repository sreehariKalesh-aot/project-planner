<template>
  <nav class="d-flex gap-5 justify-content-center mt-3 mb-4" >
    <router-link class="link" :to="{ name: 'home' }" ><li  @click="handleFilter('active')">projects</li> </router-link>
    <router-link class="link" :to="{ name: 'AddProject' }" ><li >Add a new Project</li> </router-link>
    <router-link class="link" :to="{ name: 'completed' }"><li @click="handleFilter('completed')">Completed projects</li> </router-link>
  </nav>
</template>

<script>

export default {
  components:{
    
  },
  props:["current"],
  methods:{
    handleFilter(by){
      this.$emit("filterChange" , by)
    }
  }
}
</script>

<style>
  .router-link-active{
    color: blue !important;
    border-bottom-color: blue !important;
    
  }

  li{
    list-style: none;
    text-decoration: none;
  }
  .link{
    text-decoration: none;
    color: black;
  }
  

</style>