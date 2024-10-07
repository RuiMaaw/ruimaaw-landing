import {
    IconBrandDiscord,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandWhatsapp,
} from '@tabler/icons-react';
import yanami from '../assets/yanami.png'
import Button from './component/Button';

export default function About() {
    return (
            <div className='flex flex-wrap justify-center gap-10 bg-yanami-20 text-lemon-10'>
                <div className='w-[80%] sm:w-[40%] order-last sm:order-none'>
                    <h1 className='text-2xl sm:text-4xl font-bold font-coves tracking-widest mb-4'>
                        &#9733; ABOUT ME &#9733;
                    </h1>
                    <h3 className='text-lemon-10 text-base sm:text-xl font-mono pb-4 underline underline-offset-8'>
                        Hello again! &#40;i guess&#41;
                    </h3>
                    <p className='text-yanami-15 text-sm sm:text-base font-mono'>
                        Before introducing my name i want to tell about myself.
                        i&#39;am student and i
                        have an interest of becoming a programmer my main
                        programming language are <span className='font-bold'>Javascript</span> and <span className='font-bold'>C++</span> 
                        <span className='italic'>(not yet :p)</span>
                        <br />    
                    </p>
                    <div className='flex gap-6 pt-2 mt-4'>
                            <a href='https://instagram.com'>
                                <LogoButton>
                                    <IconBrandInstagram />
                                </LogoButton>
                            </a>
                            <a href=''>
                                <LogoButton>
                                    <IconBrandGithub />
                                </LogoButton>
                            </a>
                            <a href='https://chat.whatsapp.com/wathever'>
                                <LogoButton>
                                    <IconBrandWhatsapp />
                                </LogoButton>
                            </a>
                            <a href="">
                               <LogoButton>
                                    <IconBrandDiscord />
                                </LogoButton>
                            </a>
                        </div>
                </div>
                <img src={yanami} alt="Yanami" className='w-[250] h-[250px] mx-12' />
            </div>
    );
}
function LogoButton(props) {
    return <Button className='hover:py-1 hover:px-1'>{props.children}</Button>;
}