import axios from "axios";

export default {
    createUser: function(userData) {
        return axios.post("api/users/create", userData)
    },

    storeSkill: function(Skill) {
        return axios.post("api/skill/store-skill", Skill)
    },

    getSkill: function(Skill) {
        return axios.get("api/skill/get-skill", Skill)
    }
}