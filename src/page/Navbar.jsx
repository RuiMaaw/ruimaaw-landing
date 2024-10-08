export default function Navbar() {
    return (
        <nav className={'fixed w-full z-20 top-0 start-0'}>
            <div className={'flex items-center justify-between mx-auto p-5'}>
                <a href='' className='flex'>
                    <img alt='LogoWeb' />
                </a>
                <ul className='flex gap-10'>
                    <Menu href='#home' text='Home' />
                    <Menu href='#about' color='text-komari-200' text='About' />
                    <Menu
                        href='#contact'
                        color='text-lemon-100'
                        text='Contact'
                    />
                </ul>
            </div>
        </nav>
    );
}

function Menu(props) {
    const { text, href, color = 'text-yanami-200' } = props;
    return (
        <li>
            <a
                href={href}
                className={`${color} text-lg tracking-widest font-semibold`}
            >
                {text}
            </a>
        </li>
    );
}
