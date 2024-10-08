export default function Button(props) {
    const { className, children } = props;
    return (
        <button
            className={`bg-yanami-200 text-yanami-100 hover:bg-yanami-100 hover:text-yanami-200 text-sm sm:text-lg tracking-widest font-semibold  rounded-lg transition-all ease-in duration-75 ${className}`}
        >
            {children}
        </button>
    );
}
