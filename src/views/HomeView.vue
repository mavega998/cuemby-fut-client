<template>
  <div class="container my-5">
    <ListPlayers />
  </div>
</template>

<script>
// @ is an alias to /src
import ListPlayers from '@/components/ListPlayers.vue'

export default {
  name: 'HomeView',
  components: {
    ListPlayers
  }
}
</script>
