export default function Navbar() {
    return (
        <nav className={'fixed w-full z-20 top-0 start-0 rounded-md'}>
            <div
                className={
                    'flex items-center justify-between backdrop-blur-sm mx-auto p-5'
                }
            >
                <a href='' className='font-coves font-bold tracking-widest'>
                    RuiMaaw
                </a>
                <button
                    data-collapse-toggle='navbar-default'
                    type='button'
                    className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-yanami-200 rounded-lg md:hidden focus:outline-none focus:ring-2'
                    aria-controls='navbar-default'
                    aria-expanded='false'
                >
                    <span className='sr-only'>BukaMenu</span>
                    <svg
                        className='w-5 h-5'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 17 14'
                    >
                        <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M1 1h15M1 7h15M1 13h15'
                        />
                    </svg>
                </button>
                <div className='hidden w-full md:block md:w-auto'>
                    <ul className='flex gap-10'>
                        <Menu href='#home' text='Home' />
                        <Menu
                            href='#about'
                            color='text-komari-200'
                            text='About'
                        />
                        <Menu
                            href='#contact'
                            color='text-lemon-100'
                            text='Contact'
                        />
                    </ul>
                </div>
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
