<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/Star_Wars_logo.png" width="400">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      avatars: []
    }
  }
}
</script>

<style lang="scss">

@font-face{
  font-family: 'Starjedi';
  src: url(./assets/fonts/Starjedi.ttf) format("truetype");;
}


#app {
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background-image: url("./assets/starwars.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  img{
    padding: 70px;
    padding-bottom: 0px;
  }
}

html {
  width:100%;
  height:100%;
}

body{
  margin: 0px;
}

h1{
  //-webkit-text-stroke: 2px red;
  font-family: 'Starjedi';
}
h2{
  //-webkit-text-stroke: 2px red;
  font-family: 'Starjedi';
}
h3{
  //-webkit-text-stroke: 2px red;
  font-family: 'Starjedi';
}
h4{
  //-webkit-text-stroke: 2px red;
  font-family: 'Starjedi';
}
h5{
  //-webkit-text-stroke: 2px red;
  font-family: 'Starjedi';
}
h6{
  //-webkit-text-stroke: 2px red;
  font-family: 'Starjedi';
}

p{
  //-webkit-text-stroke: 2px red;
  font-family: 'Starjedi';
}
</style>
