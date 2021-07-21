import React from 'react';

import './main.scss'

const video = {
    'Falcon 1' : 'moon',
    'Falcon 9' : 'earth' ,
    'Falcon Heavy' : 'mars',
    other : 'space'

}

const Main = ({ name, isVideo }) => {
    return (
        <section className="main">
                <h1 className="title    ">{ name }</h1>

                {
                    isVideo && 
                    <div className="video-container">
                        <video
                            className="video"
                            autoPlay
                            loop
                            muted
                            src={`video/${video.hasOwnProperty(name) ? 
                                video[name] :
                                video.other}.mp4`
                                }
                        ></video>
                    </div>
                }
            </section>

    )
}
export default Main