<template>
  <div id="avatar">
  
    <div class="title">
      <h1 class="title-h1">{{avatar != null ? avatar.name.toLowerCase() : ''}}</h1>
    </div>
    
    <img v-if="loading" src="../assets/load.gif" alt="">  
    <b-container v-if="!loading" style="margin-top:60px;">
      <b-row>
          <b-col> 
            <h1>peliculas</h1>
            <ol>
              <li v-for="item in avatar.films_name" :key="item">{{item}}</li>
            </ol>
          </b-col>

          <b-col> 
            <h1>vehiculos</h1>
            <ol>
              <li v-for="item in avatar.vehicles_name" :key="item">{{item}}</li>
            </ol>
          </b-col>

          <b-col> 
            <h1>naves</h1>
            <ol>
              <li v-for="item in avatar.starships_name" :key="item">{{item}}</li>
            </ol>
          </b-col>
         
      </b-row>

      <router-link to="/">
        <b-button> Regresar </b-button>
      </router-link>
      
    </b-container>
  </div>
</template>

<script>

export default {
  
  name: 'Avatar',
  components: {
  },
  data(){
    return {
      loading: false,
      avatar: null
    }
  },
  async beforeCreate(){
    this.loading = true;
    await this.$store.dispatch("consumeAvatarId", this.$route.params.id);
    this.avatar = this.$store.getters.getAvatarSelect;
    this.loading = false;
  }
}
</script>

<style lang="scss" scope>

.title{
  margin-top: 20px;
  .title-h1{
    font-size: 50px;
    color: rgb(255, 187, 0);
  }
}

h1{
  -webkit-text-stroke: 2px rgb(255, 187, 0);
  color:white;
}

li{
  margin-top: 10px;
  border-radius: 10px;
  background-color: rgb(26, 25, 25);
  font-size: 30px;
  box-shadow: 0 0 10px rgb(255, 243, 68);
  font-family: 'Starjedi';
  color: white;
}
.btn{
    background-color: rgb(255, 187, 0) !important;
    font-family: 'Starjedi';
    color: black !important;
    border: none !important;

    &:hover{
      background-color: rgb(255, 238, 0);
    }
  }

</style>