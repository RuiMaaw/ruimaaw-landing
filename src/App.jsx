// import { useState } from 'react'
import Navbar from './page/Navbar';
import Home from './page/Home';
import About from './page/About';
import Wave from './page/component/Wave';
import Contact from './page/Contact';

export default function App() {
    return (
        <LandingContainer>
            <Navbar />
            <Home>
                <Wave />
                <About />
            </Home>
            <Contact />
        </LandingContainer>
    );
}
function LandingContainer(props) {
    return <div className='text-yanami-20 text-lg w-full'>{props.children}</div>;
}
