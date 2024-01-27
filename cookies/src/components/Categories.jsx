const Categories = ({ categories, filterItems }) => {
    return (
        <div className="mt-8 mr-0 mb-16 ml-0 flex flex-wrap justify-center gap-4 sm:mt-12 sm:mb-20 md:gap-2 lg:gap-4 lg:mr-4 lg:ml-4">
            {categories.map((category) => {
                return (
                    <button type="button" 
                        className="block cursor-pointer text-white uppercase font-semibold bg-[#f70707] hover:bg-[#ff03c0] hover:shadow-md hover:animate-bounce 
                                   border-transparent rounded-md tracking-wide py-[0.375rem] px-3 shadow-md transition-all duration-300 ease-in-out mt-5"
                        key={category}
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </button>
                )
            })}
        </div>
    )
};

export default Categories;