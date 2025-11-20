import { useState } from "react";

const Counter = ()=> {
    const [num, setNum] = useState(0);

    function increase(){
        setNum(num+1);
    }

    function decrease(){
        setNum(num-1);
    }
    return (

        <div className=" h-[100vh] flex  items-center justify-center flex-col gap-2.5">
            <div className="div bg-fuchsia-200 w-[400px] h-[400px] rounded-[5px] p-5 flex justify-center items-center" > <h1 className=" text-[75px] font-bold text-gray-800 ">{num}</h1></div>
            <button onClick={()=> {
                increase();
            }} className=" w-[200px] h-[50px] rounded-2xl p-10 bg-amber-300 flex justify-center items-center" ><h3>increase</h3></button>
            <button onClick={()=> {
                decrease();
            }}className=" w-[200px] h-[50px] rounded-2xl p-10 bg-red-700 flex justify-center items-center"><h3>decrease</h3></button>
        </div>
    )
}

export default Counter;