import axios from "axios";

export default {
    createUser: function(userData) {
        return axios.post("api/users/create", userData)
    },

    createSkill: function(skill) {
        return axios.post("api/skill/create", skill)
    },

    getSKill: function(skill) {
        return axios.get("api/skill/get-skill", skill)
    }
}