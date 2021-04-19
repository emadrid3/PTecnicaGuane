<template>
  <div class="home">

      
      <div class="sub-title">
        <h1>Seleccione un personaje</h1>
      </div>

      <img v-if="loading" src="../assets/load.gif" alt="">

      <b-container v-if="!loading" style="margin-top:60px;">
        <b-row>
            <b-col v-for="(item, index) in avatars" :key="index" cols="4" style="margin-top: 30px;"> 
              <b-card
                :title="item.name.toLowerCase()"
                img-src="https://www.cinemascomics.com/wp-content/uploads/2021/01/darth-vader-star-wars-el-ascenso-de-skywalker.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 30rem;"
                class="mb-2"
              >
                <b-card-text >
                  {{"Mundo natal - " + item.homeworld_name}}
                </b-card-text>
               
                  <b-button variant="primary" @click="goRoute(index)"> ver mas..</b-button>
                  
              </b-card>
            </b-col>
        </b-row>
        <div class="mt-3">
          <b-pagination v-model="currentPage" :total-rows="rows" :per-page="10" align="center" @change="changePage"></b-pagination>
        </div>
      </b-container>

  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      loading: false,
      avatars: [],
      rows: 82,
      currentPage: 1,
      
    };
  },
  async created(){

    this.loading = true;
    await this.$store.dispatch("consumeAvatars", 1);
    this.avatars.push(...this.$store.getters.getAvatars.results);
    this.loading = false;
  },
  methods:{
    goRoute(index){
      this.$router.push({ path: '/avatar/'+((index+1)+((this.currentPage*10)-10)) })
    },

    async changePage(index){
      this.currentPage = index;
      this.loading = true;
      await this.$store.dispatch("consumeAvatars", index);
      this.avatars = this.$store.getters.getAvatars.results;
      this.loading = false;
    }
  }

}
</script>

<style lang="scss">

.sub-title{
  text-align: center;

  h1{
    color:white;
  }
}

.card-img-top{
  padding: 0px !important;
}

.card{
  background-color: rgb(26, 25, 25) !important;
  box-shadow: 0 0 10px rgb(255, 243, 68) !important;
  border: 3px solid rgb(255, 208, 0) !important;

  .card-title{
    color: rgb(255, 208, 0) !important;
  }

  .card-text{
    color: white !important;
  }

  .btn{
    background-color: rgb(255, 187, 0);
    font-family: 'Starjedi';
    color: black !important;
    border: none !important;

    &:hover{
      background-color: rgb(255, 238, 0);
    }
  }
}

</style>
