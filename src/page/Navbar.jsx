export default function Navbar() {
    return (
        <nav className={'fixed w-full z-20 top-0 start-0'}>
            <div className={'flex items-center justify-between mx-auto p-5'}>
                <a href='' className='flex'>
                    <img alt='LogoWeb' />
                </a>
                <ul className='flex gap-10'>
                    <Menu href='#home' text='Home' />
                    <Menu href='#about' color='komari-10' text='About' />
                    <Menu href='#contact' color='lemon-10' text='Contact' />
                </ul>
            </div>
        </nav>
    );
}

function Menu(props) {
    const { text, href, color = 'yanami-20' } = props;
    return (
        <li>
            <a
                href={href}
                className={`text-${color} text-lg tracking-widest font-semibold`}
            >
                {text}
            </a>
        </li>
    );
}
