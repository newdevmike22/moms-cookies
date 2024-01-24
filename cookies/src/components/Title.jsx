import logo from "../../public/images/big_mom_logo.png";

const Title = ({ text }) => {
    return (
        <div className="text-center">
            <img src={logo} alt="big mom logo" className="mx-auto block w-[375px] h-auto hover:animate-bounce cursor-pointer" />
            <h2 className="mb-[0.5rem] text-[2.25rem] font-semibold capitalize">{text || "Default Title"}</h2>
            <div className="bg-gradient-to-r from-[#f70707] to-[#ff9cdc] w-[8rem] h-[0.25rem] mx-auto mt-0"></div>
        </div>
    )
};

export default Title;