export default function Project(props) {
    return (
        <div className='bg-komari-200 pb-16'>
            {props.children}
            <h1 className='uppercase font-coves font-bold text-2xl sm:text-4xl text-right text-lemon-100 tracking-widest p-12'>
                &#9733; project &#9733;
            </h1>
            <div>
                <h1 className='italic font-coves text-4xl text-yanami-150 font-bold tracking-widest text-center'>
                    dont have it yet :3
                </h1>
                <p className='font-mono text-right text-yanami-100 text-xs underline p-8'>
                    note: ill display some if i have taken a project
                </p>
            </div>
        </div>
    );
}
