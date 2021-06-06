import React from 'react';

const BackgroundVideo = ({ videoSource, children }) => {
  // TODO: Accept `blur` value as a prop

  return (
    <>
      <div className='container'>
        <video
          autoPlay="autoplay"
          loop="loop"
          muted
          className='video' >
            {/* TODO make it accept multiple media types */}
          <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
        {children}
      </div>
      <span id="video-bottom"></span>
    </>
  )
}

export default BackgroundVideo







