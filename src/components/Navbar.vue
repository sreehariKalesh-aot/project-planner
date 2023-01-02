<template>
  <nav class="d-flex gap-5 justify-content-center mt-3 mb-4" >
    <router-link :to="{ name: 'home' }"><button class="btn">projects</button> </router-link>
    <router-link :to="{ name: 'AddProject' }"><button class="btn">Add a new Project</button> </router-link>

  </nav>
</template>

<script>


export default {
  components:{
    
  }
}
</script>

<style>
  
</style>