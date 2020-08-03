import React from 'react'
import '../css/story.css'
import Video from '../images/Video.png'

const Story = () => {
    return (
        <div className="story">
            <div className="story-left">
                <h2>Let's hear about Kayla's success story</h2>
                <p>See how well Alivio works in real customer's life.</p>
                <button>Let's get started</button>
            </div>
            <div className="story-right">
                <img src={Video} alt="Success Story" />
            </div>
        </div>
    )
}

export default Story
