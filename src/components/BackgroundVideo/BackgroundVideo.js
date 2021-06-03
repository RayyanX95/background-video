import React from 'react';

const BackgroundVideo = (props) => {

  const videoSource = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  const scrollToBottom = () => {
    const bottomEle = document.getElementById("video-bottom");
    bottomEle.scrollIntoView({ behavior: "smooth" });
    debugger
  }

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

        <div className='content'>
          <div className='sub-content' >
            <h1>Reactjs Course</h1>
            <p>Learn how to develope React projects</p>
            <button
              className="btn btn-outline-dark"
              onClick={scrollToBottom}>
              Let's go!
          </button>
            <img
              className="view-image"
              src="https://www.jing.fm/clipimg/detail/139-1394959_panda-cartoon-png-cute-cartoon-panda-bear.png"
              alt="profile" />
          </div>
        </div>
      </div>
      <span id="video-bottom"></span>
    </>
  )
}

export default BackgroundVideo







