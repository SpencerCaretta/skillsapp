import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import API from "../../utils/API";
// import SkillButton from "../Button";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.displaySkills = [];
        this.state = {
            showdata: this.displaySkills,
            value: '',
            level: 1,
            experience: 0,
            //User Info
            user: localStorage.getItem('user')
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createButton = this.createButton.bind(this);
    }

    //get all of the skills the user has logged
    getSkills = () => {
        if(this.state.user) {
            API.getSkills(this.state.user)
                .then((res) => {
                    if (res.data.skills) {
                        let pastData = res.data.skills[0];
                        this.setState({
                            showdata: pastData
                        })
                    }
                })
                .catch(() => console.log("No Prior Data for this user."))
        }
    }

    //grab the user and their skills
    componentDidMount() {
        this.setState({
          user: localStorage.getItem('user')
        });
        API.createUser( {userID: this.state.user})
        this.getSkills();
      }
    
      //create a button based on what skill the user puts in with on click function to work on that skill
    createButton(event) {
        //button currently logs out user
        event.preventDefault();
        this.displaySkills.push(<div id="displaySkills"><Button onClick={this.workOnSkill}>{this.state.value} - Level: {this.state.level} Experience: {this.state.experience}</Button></div>)
        API.storeSkill(this.state.user, {
            skill: this.state.value,
            level: this.state.level,
            experience: this.state.experience
        })
        this.setState({
            showdata: this.displaySkills,
            value: ''
        })
    }
    //function to switch to page over to whatever skill you want to work on
    workOnSkill(event) {
        event.preventDefault();
        // this.handleChange();
        window.location.replace("/:skill")
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    
    }


    render() {
        return (
            <div>
                <Grid container spacing = {24}>
                    <Grid item xs={12}>
                        <form onSubmit={this.handleSubmit}>
                            <label>Add Skill: 
                                <input type="text"  value={this.state.value} onChange={this.handleChange}/>
                            </label>
                            <input type="submit" className="button" value="Submit" onClick={this.createButton}/>
                        </form>
                    </Grid>
                    <Grid item xs={12}>
                        <div id="skillsAdded">
                            {this.displaySkills}
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default Input;