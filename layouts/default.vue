<template>
  <v-app>
    <Header />

    <Nuxt class="rootContent"/>
  </v-app>
</template>


<script>
import Header from '@/components/Header'


export default {
  components: { 
    Header
    },

}
  
</script>

<style scoped>
  .rootContent{
    padding:10% 1em;
    font-style: roboto;
  }
</style>