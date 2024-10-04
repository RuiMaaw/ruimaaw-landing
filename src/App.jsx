// import { useState } from 'react'
import Navbar from './page/Navbar';
import Home from './page/Home';

export default function App() {
    return (
        <LandingContainer>
            <Navbar />
            <Home></Home>
        </LandingContainer>
    );
}
function LandingContainer(props) {
    return <div className=' text-yanami-20 text-lg'>{props.children}</div>;
}
