import HeadComp from "./HeadComp";

const Header = () => {
    return ( <>
        <div className="flex gap-10 px-12.5 py-5">
            <HeadComp h3="Free Shipping" icon= "ri-truck-fill text-gray-800 text-5xl"/>
            <HeadComp h3="Support 24/7" icon="ri-24-hours-line text-gray-800 text-5xl"/>
            <HeadComp h3="Money Return" icon = "ri-refund-2-line text-gray-800 text-5xl"/>
        </div>

        <h2 className="text-5xl font-semibold text-gray-800 text-center mb-5">Arrivals</h2>
    </>)
}

export default Header ;