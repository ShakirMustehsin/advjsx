import HeadComp from "./HeadComp";

const Header = () => {
    return (
        <div className="flex gap-10 px-[50px] py-[20px]">
            <HeadComp h3="Free Shipping" icon= "ri-truck-fill text-gray-800 text-5xl"/>
            <HeadComp h3="Support 24/7" icon="ri-24-hours-line text-gray-800 text-5xl"/>
            <HeadComp h3="Money Return" icon = "ri-refund-2-line text-gray-800 text-5xl"/>
        </div>
    )
}

export default Header ;