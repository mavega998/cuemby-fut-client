import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://futdb.app/api',
    headers: {
        'X-AUTH-TOKEN': '51a8b223-3f77-4db9-a000-2ac2210dbfc8'
    }
});

export default {
    async getAllPlayers(page = 1, limit = 5) {
        return await (await instance.get(`/players?page=${page}&limit=${limit}`)).data;
    },
    async getNationById(id) {
        return await (await instance.get(`/nations/${id}`)).data;
    },
    async getClubById(id) {
        return await (await instance.get(`/clubs/${id}`)).data;
    },
    async getPlayerById(id) {
        return await (await instance.get(`/players/${id}`)).data;
    } 
}
