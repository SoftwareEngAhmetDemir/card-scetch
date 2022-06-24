import React from 'react'
import $ from 'jquery';
import './helper-video';
function Video() {

    return (
        <div className='video'>
            <div className='container'>
                <div className='row pad'>
                    <div className='col-lg-6 order-0'>
                        <h2 className='text-white mb-5 text-start'>
                            Feel the excellent wet braking with Driveways!
                        </h2>
                    </div>
                    <div className='offset-lg-3 col-lg-3 col-12 order-lg-1 order-2 my-4'>
                        <button className='btn btn-primary text-danger fw-bold w-100' 
                        style={{ padding: '13px 24px' }}>Watch All Videos</button>
                    </div>
                   
                        <div class="wrapper col-12 order-lg-2 order-1">
                            <img id="video-cover" src="./assets/images/poster.png" alt="Video title"/>
                            <iframe id="player" width="100%"  src="https://www.youtube.com/embed/d7lCZ0rpH3o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            <button id="play" class="play-btn">
                                <img src='./assets/images/ytb.svg' />
                            </button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Video