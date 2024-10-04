import React from 'react';
import Button from './component/Button';
import Typed from 'typed.js';
import '../style/home.css';
import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandWhatsapp,
} from '@tabler/icons-react';

export default function Home() {
    return (
        <main>
            <Landing />
            <Wave />
            <About />
        </main>
    );
}

function Landing() {
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
        <div className='landing grid place-content-center text-center pt-44 flex-wrap'>
            <div className='border-container border-b-2 border-yanami-20 pb-3 sm:pb-5'>
                <h1 className='text-2xl sm:text-4xl font-bold '>
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
    );
}
function About() {
    return (
        <section className='bg-yanami-20 text-lemon-10'>
            <div className='about-text flex justify-between px-16 relative'>
                <span className='font-mono'>
                    <h1 className='text-2xl sm:text-4xl font-bold tracking-widest pb-4'>
                        &#9733; About Me &#9733;
                    </h1>
                    <p className='text-lemon-10 text-base sm:text-xl pb-4 underline underline-offset-8'>
                        Hello again! &#40;i guess&#41;
                    </p>
                    <p className='text-yanami-15 text-xs sm:text-base'>
                        Before introducing my name i want to tell about myself.
                        i&#39;am student of SMK MA&#39;ARIF NU 01 LIMPUNGand i
                        have an interest of becoming a programmer my main
                        programming language are Javascript and Python
                        <br />
                        <ul className='flex gap-6 pt-2'>
                            <li>
                                <a href=''>
                                    <LogoButton>
                                        <IconBrandInstagram />
                                    </LogoButton>
                                </a>
                            </li>
                            <li>
                                <a href=''>
                                    <LogoButton>
                                        <IconBrandGithub />
                                    </LogoButton>
                                </a>
                            </li>
                            <li>
                                <a href=''>
                                    <LogoButton>
                                        <IconBrandWhatsapp />
                                    </LogoButton>
                                </a>
                            </li>
                        </ul>
                    </p>
                </span>
            </div>
        </section>
    );
}
function Wave() {
    return (
        <svg
            width='100%'
            height='10%'
            id='svg'
            viewBox='0 0 1440 390'
            xmlns='http://www.w3.org/2000/svg'
            className='mt-40 transition duration-300 ease-in-out delay-150'
        >
            <path
                d='M 0,400 L 0,150 C 138.93333333333334,156.8 277.8666666666667,163.60000000000002 426,144 C 574.1333333333333,124.39999999999999 731.4666666666667,78.4 902,75 C 1072.5333333333333,71.6 1256.2666666666667,110.8 1440,150 L 1440,400 L 0,400 Z'
                stroke='none'
                strokeWidth='0'
                fill='#2b528b'
                fillOpacity='1'
                className='transition-all duration-300 ease-in-out delay-150 path-0'
            ></path>
        </svg>
    );
}
function LogoButton({ children }) {
    return <Button className='hover:py-1 hover:px-1'>{children}</Button>;
}