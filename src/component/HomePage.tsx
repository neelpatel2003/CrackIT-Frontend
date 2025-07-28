import React, { Suspense } from 'react'
import Loading from './Loading';
import Video from './Video';
import GetStarted from './GetStarted';
const Navbar = React.lazy(() => import('./Navbar'));
const Content = React.lazy(() => import('./Content'));
const Footer = React.lazy(() => import('./Footer'));
const HomePage = () => {
    return (
        <Suspense fallback={<Loading />}>
            <div className="video-bg-container">
                <video autoPlay loop muted id='bubble-bg' className='video-bg'>
                    <source src="./bg-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <Navbar />
            <GetStarted />
        </Suspense>
    )
}

export default HomePage
