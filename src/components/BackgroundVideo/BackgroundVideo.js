import React from 'react';

import classes from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
    const videoSource = "https://www.w3schools.com/tags/movie.mp4"
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h1>Reactjs Course</h1>
                    <p>Learn how to develope React projects</p>
                    <button type="button" className="btn btn-outline-dark">View the course</button>
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo
