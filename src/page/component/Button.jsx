export default function Button(props) {
    const { className, children } = props;
    return (
        <button
            className={`bg-yanami-20 text-yanami-10 hover:bg-yanami-10 hover:text-yanami-20 text-sm sm:text-lg tracking-widest font-semibold  rounded-lg transition-all ease-in duration-75 ${className}`}
        >
            {children}
        </button>
    );
}