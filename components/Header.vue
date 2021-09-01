<template>
  <nav>

  <img src="/logo.jpg" class="Logo" height="110" width="110"/>


  <button class="btnHome">
      HOME
  </button>
  <button class="btnAbout">
      ABOUT
  </button>
  <button class="btnPrograms">
      PROGRAMS
  </button>
  <button class="btnLogin">
      LOGIN
  </button>

  </nav>

</template>

<script>
export default {

}
</script>

<style scoped>
    nav{
        padding: 0.5em;
        position:fixed;
        width: 100%;
        top: 0;
        left: 0;
        background-color:white;
        color:black;

    }
    button{
        margin-left: 4em;
    }
    .Logo{
        margin-left: 8em;
        margin-top: 0;
        margin-bottom: 0;
        margin-right: 0;
    }
    .btnHome{
        margin-left: 5em;
    }
    .btnLogin{
        margin-left: 35em;
    }
    
</style>