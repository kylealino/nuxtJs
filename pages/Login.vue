<template>
  <section class="rootContent">

      <form @submit.prevent="submitLogin" class="bg-white centered-input  p-3 form">
          <img src="/security.png" class="Logo"  height="90" width="90"/>
          <v-text-field
              outlined
              dense
              label="email"
              height="3em" 
              v-model="user.email"
          />
          <v-text-field
              outlined
              dense
              label="password"
              type="password"
              height="3em"
              v-model="user.password"
                
          />
          <div class="text-center">
              <button type="submit" class="border rounded Login">LOGIN</button>
          </div>
      </form>
  </section>
</template>

<script>
export default {
    data(){
        return{
            user:{
                email:'',
                password:'',
            }
        }
    },
    methods:{
        submitLogin(){
            alert("Login Successfully")
        }
    }
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