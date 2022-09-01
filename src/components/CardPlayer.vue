<template>
    <div class="card mx-1 my-1">
        <img class="card-img-top" width="80px"
            src="https://cdn-icons-png.flaticon.com/512/3152/3152544.png">
        <div class="card-body">
            <!-- <h5 class="card-title">{{ name }}</h5> -->
            <div class="card-header">
                <b>{{ name }}</b>
            </div>
            <div class="card-subtitle">
                <ul class="list-group">
                    <li class="list-group-item text-start">
                        <b>Age: </b>
                        <span>{{ age }} years.</span>
                    </li>
                    <li class="list-group-item text-start">
                        <b>Position: </b>
                        <span>{{ position }}</span>
                    </li>
                    <li class="list-group-item text-start">
                        <b>Club: </b>
                        <span>{{ clubName ? clubName : 'Cargando...' }}</span>
                    </li>
                    <li class="list-group-item text-start">
                        <b>Nation: </b>
                        <span>{{ nationName ? nationName : 'Cargando...' }}</span>
                    </li>
                </ul>
                <router-link v-if="showId" :to="`/detail/${id}`" :class="{ disabled: !id }" class="my-3 btn btn-info">Ver detalle</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import FutDB from '../services/FutDB.js';

export default {
    props: {
        showId: {
            type: Boolean,
            default: () => { return true }
        },
        id: {
            type: Number,
            require: true,
            default: null
        },
        name: {
            type: String,
            require: true,
            default: ''
        },
        age: {
            type: Number,
            require: true,
            default: null
        },
        position: {
            type: String,
            require: true,
            default: ''
        },
        club: {
            type: Number,
            require: true,
            default: null
        },
        nation: {
            type: Number,
            require: true,
            default: null
        }
    },
    data: () => ({
        clubName: null,
        nationName: null  
    }),
    created() {
        this.getNationById();
        this.getClubById();
    },
    methods: {
        async getNationById() {
            try {
                const { item } = await FutDB.getNationById(this.nation);
                this.nationName = item.name
            } catch (err) {
                this.nationName = '----'
            }
        },
        async getClubById() {
            try {
                const { item } = await FutDB.getClubById(this.club);
                this.clubName = item.name
            } catch (err) {
                this.clubName = '----'
            }
        },
        showDetail() {
            console.log(this.nation);
        }
    }
}
</script>
