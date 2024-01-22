const Title = ({ text }) => {
    return (
        <div className="text-center">
            <h2 className="mb-[0.75rem] text-[2.5rem] font-semibold capitalize">{text || "Default Title"}</h2>
            <div className="bg-gradient-to-r from-[#f70707] to-[#ff9cdc] w-[8rem] h-[0.25rem] mx-auto mt-0"></div>
        </div>
    )
};

export default Title;