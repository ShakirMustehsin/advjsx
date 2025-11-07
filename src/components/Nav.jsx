const Nav = () => {
    return (
        <div className="flex justify-between items-center p-10  bg-[white] w-full h-[10vh] text-gray-800 "   >
             
             <h1 className="text-4xl ">Ulfaurea</h1>
             <div className=" flex gap-10 text-lg ">
                <h4>Home</h4>
                <h4>Shop</h4>
                <h4>Collection</h4>
                <h4>Pages</h4>
                <h4>Blog</h4>
                <h4>About</h4>
                <h4>Contact</h4>
             </div>

             <div className="flex gap-6">
                <i class="ri-shopping-bag-4-fill text-2xl"></i>
                <i class="ri-heart-3-fill text-2xl" ></i>
                <i class="ri-search-line text-2xl"></i>

             </div>

        </div>
    )
}
export default Nav;