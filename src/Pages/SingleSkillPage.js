import React from 'react';
import Title from "../components/Title";
import AddEXP from "../components/AddEXP";
import Timer from "../components/Timer";


//showing up on home page currently
function SingleSkillPage () {
    return (
        <div>
            <Title />
            <AddEXP />
            <Timer />
        </div>
    )
}

export default SingleSkillPage;