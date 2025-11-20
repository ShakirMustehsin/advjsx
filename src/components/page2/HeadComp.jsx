const HeadComp = (props) => {
    return (
        <div className="w-[500px] h-[500px] flex flex-col gap-5 px-5]py-2.5 justify-center items-center">
            <i class={props.icon} ></i>
            <h3 className="text-gray-800 text-4xl font-semibold">{props.h3}</h3>
            <p className="text-gray-600 text-[15px] font-semibold text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae temporibus inventore cum repellendus cupiditate explicabo!</p>

        </div>
    )
}

export default HeadComp ;