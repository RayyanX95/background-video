import React from 'react';

const BackgroundVideo = (props) => {
  const videoSource = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

  return (
    <>
      <div className='container' style={{ maxHeight: window.innerHeight }}>
        <video
          autoPlay="autoplay"
          loop="loop"
          muted
          className='video' >
          <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
        {props.children}
      </div>
      <span id="video-bottom"></span>
    </>
  )
}

export default BackgroundVideo







