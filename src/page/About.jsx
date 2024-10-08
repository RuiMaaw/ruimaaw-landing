import {
    IconBrandDiscord,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandWhatsapp,
} from '@tabler/icons-react';
import yanami from '../assets/yanami.png';
import Button from './component/Button';
import Card from './component/Card';

export default function About() {
    return (
        <div className='flex flex-wrap justify-center gap-10 bg-yanami-200 text-lemon-100 pb-14'>
            <div className='w-[80%] sm:w-[40%] order-last sm:order-none'>
                <h1 className='uppercase text-2xl sm:text-4xl font-bold font-coves tracking-widest mb-4'>
                    &#9733; about me &#9733;
                </h1>
                <h3 className='text-lemon-100 text-base sm:text-xl font-mono pb-4 underline underline-offset-8'>
                    Hello again! &#40;i guess&#41;
                </h3>
                <p className='text-yanami-150 text-sm sm:text-base font-mono'>
                    Before introducing my name i want to tell about myself.
                    i&#39;am student and i have an interest of becoming a
                    programmer my main programming language are{' '}
                    <span className='font-bold'>Javascript</span> and{' '}
                    <span className='font-bold'>C++</span>
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
                    <a href=''>
                        <LogoButton>
                            <IconBrandDiscord />
                        </LogoButton>
                    </a>
                </div>
            </div>
            <Card src={yanami}>
                <a href="">
                <h5 className='text-komari-200 hover:text-komari-100 font-bold font-coves tracking-widest'>Certified Yanami Supporter.</h5>
                </a>
            </Card>
        </div>
    );
}
function LogoButton(props) {
    return <Button className='hover:py-1 hover:px-1'>{props.children}</Button>;
}
