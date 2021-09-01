<template>
  <section class="rootContent">

      <form class="bg-white centered-input  p-3 form">
          <img src="/security.png" class="Logo"  height="90" width="90"/>
          <v-text-field
              outlined
              dense
              label="email"
              height="3em" 
          />
          <v-text-field
              outlined
              dense
              label="password"
              type="password"
              height="3em"
                
          />
          <div class="text-center">
              <button class="border rounded Login">LOGIN</button>
          </div>
      </form>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    .form{
        margin: 0% 25%;
    }
    .Login{
        color: white;
        background-color: green;
        height: 3em;
        width: 100%;
    }
    .Logo{
        margin: 3% 42%;

    }


</style>