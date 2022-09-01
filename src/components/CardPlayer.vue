<template>
    <div class="card mx-1 my-1">
        <img class="card-img-top" width="80px"
            src="https://cdn-icons-png.flaticon.com/512/3152/3152544.png">
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <div class="card-subtitle">
                <ul>
                    <li>
                        <b>Age: </b>
                        <span>{{ age }} years.</span>
                    </li>
                    <li>
                        <b>Position: </b>
                        <span>{{ position }}</span>
                    </li>
                    <li>
                        <b>Club: </b>
                        <span>{{ clubName ? clubName : 'Cargando...' }}</span>
                    </li>
                    <li>
                        <b>Nation: </b>
                        <span>{{ nationName ? nationName : 'Cargando...' }}</span>
                    </li>
                </ul>
                <button class="btn btn-info" @click="showDetail">Ver detalle</button>
            </div>
        </div>
    </div>
</template>
<script>
import FutDB from '../services/FutDB.js';

export default {
    props: {
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
