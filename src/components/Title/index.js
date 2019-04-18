import React from 'react';
import Grid from '@material-ui/core/Grid';

//Must import state to this component
function Title () {
    return (
        <div>
            <Grid container spacing = {24}>
                <Grid item xs = {12}>
                    {/* <h1 id = "title">{this.state.value}</h1> */}
                </Grid>
            </Grid>
        </div>
    )
}

export default Title;