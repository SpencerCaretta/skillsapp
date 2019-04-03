const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillsSchema = new Schema ({
    //Skill name itself input by user
    skillName: {type: String, required: true},
    //Level, starts out at 1
    level: Number,
    //Experience, starts out at 0
    experience: Number

})

const Skills = mongoose.model("Skills", skillsSchema);

module.exports = Skills;