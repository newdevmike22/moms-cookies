const Categories = ({ categories}) => {
    return (
        <div className="mt-8 mr-0 mb-16 ml-0 flex wrap justify-center gap-4">
            {categories.map((category) => {
                return (
                    <button type="button" 
                        className="block cursor-pointer text-white uppercase font-semibold bg-[#f70707] hover:bg-[#ff03c0] hover:shadow-md hover:animate-bounce 
                                   border-transparent rounded-md tracking-wide py-[0.375rem] px-3 shadow-md transition-all duration-300 ease-in-out"
                        key={category}
                    >
                        {category}
                    </button>
                )
            })}
        </div>
    )
};

export default Categories;