import React from 'react';
import Button from './component/Button';
import Typed from 'typed.js';
import '../style/home.css';

function Home(props) {
    const typing = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(typing.current, {
            strings: ['Dika.', 'RuiMaaw.', 'Tanya.'],
            typeSpeed: 150,
            backSpeed: 160,
            backDelay: 1200,
            loop: true,
            loopCount: Infinity,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className=''>
        <div className='landing grid place-content-center text-center pt-44 flex-wrap'>
            <div className='border-container border-b-2 border-yanami-20 pb-3 sm:pb-5'>
                <h1 className='text-2xl sm:text-4xl font-bold'>
                    Hello,{' '}
                    <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-komari-10 relative inline-block'>
                        <span className='relative text-yanami-15'>Visitor</span>
                    </span>
                    <br />
                    My Name is <span ref={typing}></span>
                </h1>
            </div>
            <p className='font-mono text-komari-10 text-xs sm:text-base px-11 pb-5 pt-3 sm:pb-8 sm:pt-5'>
                Hello! oh is the name confusing?
                <span className='text-yanami-20'>
                    {' '}
                    are you interested to know who i am?
                </span>
                <br />
                <span className='text-lemon-10'>
                    then scroll and explore about my identity :3
                </span>
            </p>
            <div className='mb-16 gap-4 flex justify-center'>
                <Button className='py-1 px-8'>Learn More!</Button>
                <Button className='py-1 px-8'>Contact Me!</Button>
            </div>
        </div>
        {props.children}
        </section>
    );
}


export default Home;