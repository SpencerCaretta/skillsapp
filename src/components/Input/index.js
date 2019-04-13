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
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createButton = this.createButton.bind(this);
    }
    
    createButton(event) {
        event.preventDefault();
        this.displaySkills.push(<div id="displaySkills"><Button>{this.state.value}</Button></div>)
        API.createSkill(this.state.user, {
            skill: this.state.value
        })
        this.setState({
            showdata: this.displaySkills,
            value: ''
        })
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