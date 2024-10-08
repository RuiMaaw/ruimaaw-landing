export default function Card(props) {
    return (
        <div className='w-[20%] bg-yanami-150 border border-gray-200 rounded-lg shadow'>
            <a href='#'>
                <img className='rounded-t-lg' src={props.src} alt='' />
            </a>
            <div className='p-3 border border-t-gray-200 rounded-b-lg'>
                {props.children}
            </div>
        </div>
    );
}
