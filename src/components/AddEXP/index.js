import React from 'react';
import Grid from '@material-ui/core/Grid';

class AddEXP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                            <label>Add EXP: 
                                <input type="text"  placeholder="Put in # of Minutes" value={this.state.value} onChange={this.handleChange}/>
                            </label>
                            <input type="submit" className="button" value="Add" onSubmit={this.handleSubmit}/>
                        </form>
                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default AddEXP;