// import { useState } from 'react'
import Navbar from './page/Navbar';
import Home from './page/Home';
import About from './page/About';
import { WaveTop, WaveBottom } from './page/component/Wave';
import Contact from './page/Contact';
import Project from './page/Project';

export default function App() {
    return (
        <LandingContainer>
            <Navbar />
            <Home>
                <WaveTop />
                <About />
                <Project>
                    <WaveBottom />
                </Project>
            </Home>
            <Contact />
        </LandingContainer>
    );
}
function LandingContainer(props) {
    return (
        <div className='text-yanami-200 text-lg w-full'>{props.children}</div>
    );
}
