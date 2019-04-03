import React from 'react';
import Grid from '@material-ui/core/Grid';
import "../Jumbotron/style.css"

function Jumbotron () {
    return (
        <div>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <h1 id="header">Work on Your Skills</h1>
                    <p id="directions">Type the skill you want to work on into the input box below to get started.</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default Jumbotron;