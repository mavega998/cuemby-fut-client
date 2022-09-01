<template>
    <div class="row justify-content-center">
        <CardPlayer
            class="col-2"
            v-for="player in players"
            :key="player.id"
            :id="player.id"
            :age="player.age"
            :name="player.name"
            :position="player.position"
            :nation="player.nation"
            :club="player.club"
            :showId="true"
        />
        <ListPages :page="page" :totalPage="totalPages" @currentPage="updatePage"/>
    </div>
</template>
<script>
import FutDB from '../services/FutDB.js';
import CardPlayer from './CardPlayer.vue';
import ListPages from './ListPages.vue';

export default {
    name: 'ListPlayers',
    components: {
        CardPlayer,
        ListPages
    },
    data: () => ({
        players: [],
        totalItems: 0,
        page: 1,
        totalPages: 0,
        itemPerPage: 20,
    }),
    created() {
        this.getPlayers();
    },
    methods: {
        async getPlayers() {
            const resp = await FutDB.getAllPlayers(this.page)
            this.players = resp.items;
            this.page = resp.page;
            this.totalPages = resp.page_total;
            this.itemPerPage = resp.items_per_page;
        },
        updatePage(currentPage) {
            this.page = currentPage;
            this.getPlayers();
        }
    }
}
</script>