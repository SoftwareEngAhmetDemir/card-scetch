import React from 'react'

function Banner() {
    return (
        <div className='banner'>
            <img src='./assets/images/banner.svg' />
            <div className='banner-desc text-center'>
                <div className='title'>
                    <h1 className='text-white'>Nothing can stop you</h1>
                </div>
                <div className='banner-btn'>
                    <button className='btn btn-primary'>FIND OUT MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Banner