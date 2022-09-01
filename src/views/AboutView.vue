<template>
  <div class="about">
    <h1 class="my-3">ID: {{ id }}</h1>
    <div class="row">
      <div class="col-4 offset-4">
        <CardPlayer v-if="player"
          :age="player.age"
          :name="player.name"
          :position="player.position"
          :nation="player.nation"
          :club="player.club"
          :showId="false"
        />
        <router-link to="/">Regresar</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import FutDB from "../services/FutDB.js";
import CardPlayer from "@/components/CardPlayer.vue";

export default {
  components: { CardPlayer },
  data: () => ({
    id: null,
    player: null,
  }),
  mounted() {
    this.id = this.$route.params.id;
    this.getPlayerInfoById();
  },
  methods: {
    async getPlayerInfoById() {
      const { item } = await FutDB.getPlayerById(this.id);
      this.player = item;
    },
  },
};
</script>
