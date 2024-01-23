const MenuItem = ({ img, title, price, desc }) => {
    return (
        <article className="bg-white rounded-md max-w-25rem h-full shadow-md">
            <img src={img} alt={title} className="h-[15rem] rounded-tr-lg rounded-tl-lg w-[100%] block hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" />
            <div className="p-[1.5rem]">
                <header className="flex justify-between flex-wrap gap-4 mb-5">
                    <h5 className="text-[1.25rem] font-[500] capitalize">{title}</h5>
                    <span className="bg-gradient-to-r from-[#f70707] to-[#f752dd] text-white py-1 px-2.5 tracking-wide rounded-md font-semibold">${price}</span>
                    <p className="leading-[2] text-[#64748b]">{desc}</p>
                </header>
            </div>
        </article>
    )
};
 
export default MenuItem;