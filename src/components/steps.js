import React from 'react'
import '../css/steps.css'
import One from '../images/01.png';
import Two from '../images/02.png';
import Three from '../images/03.png';
import Personalize from '../images/personalize.png';
import Journal from '../images/journal.png';
import Avilio from '../images/avilio.png';



const Steps = () => {
    return (
        <div className="steps">
            <div className="personalize">
                <img src={One} alt="" />
                <h2>Personalize</h2>
                <p>Answer a quick survey about how you express yourself,
                    what causes you stress, and what area would you like to
                    work on. This way, we can fully personalize your journal.
                </p>
                <img src={Personalize} alt="Personalize" />
            </div>

            <div className="write">
                <img src={Two} alt="" />
                <h2>Write & Understand</h2>
                <p>Write, draw, reflect, understand. Avilio will guide you through
                    the prompts and will help you manage stress!
                </p>
                <img src={Journal} alt="Write & Understand" />
            </div>

            <div className="avilio">
                <img src={Three} alt="" />
                <h2>Avilio!</h2>
                <p>Now you are aware, and have a way to manage and overcome your
                    own stress. What are you waiting for? Avilio today!
                </p>
                <img src={Avilio} alt="Avilio" />
            </div>
        </div>
    )
}

export default Steps
