const BodyComp = (props)=>{
    return (
        <div className="w-[300px] h-[500px] flex flex-col p-5 rounded-xl m-2 bg-gray-300">
            <img className="h-[450px] object-cover rounded-xl" src={props.img} alt="" />
            <div className="flex justify-between pt-3 pl-2">
                 <h3 className="text-gray-800 font-semibold text-xl">{props.name}</h3>
                 <i class="ri-hearts-line text-gray-800 font-bold text-3xl"></i>
            </div>
            <h5 className="text-gray-800 font-semibold text-xl pl-2" >{props.price}</h5>
        </div>
    )
}
export default BodyComp;