import { useEffect, useState } from "react";
import { RiMapPin2Line } from "react-icons/ri";


const Properties = () => {

    const [data, setData] = useState([])

    useEffect(() => {
    
        fetch("http://localhost:5000/mainproduct")
        .then(res => res.json())
        .then(d => {
            setData(d)
        })
    
    
    }, [])







    return (
        <div>
            <div className="my-4 xl:mx-[240px] lg:mx-[150px] md:mx-[50px]">
                <h2 className="text-center font-bold my-4">All Properties</h2>
<div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">


{

data.map((d, index) => {



    return(<div key={index} className="w-full bg-[#fff] p-2 rounded-md">
        <div className="w-full addr h-[200px] rounded-md relative bg-[#000000bd]">
        <img className="w-full adder h-full rounded-md opacity-60 " src={d?.productImage[0]} alt="image" />

     <div className="absolute top-0">

        <h2 className="font-bold bg-[#3e4c66d5] m-[8px] text-white px-2 py-[2px] text-[13px] rounded-md">{d?.status}</h2>

     </div>

        </div>

  
<div className="p-2">
<div>
    <h2 className="text-orange-500">{d?.productType}</h2>
</div>

           <h2 className="font-bold text-[18px]">{d?.productTitle}</h2>
      <div className="flex my-[5px] text-[#7D7D7D] text-[15px] gap-2 items-center"><RiMapPin2Line></RiMapPin2Line>{d?.productLocation}</div>


<div className="flex gap-4 text-[#7D7D7D] my-[5px] text-[15px]">

   <div> Beds: {d?.beds}</div>

 <div> Baths: {d?.baths}</div>

 <div> Sqfts: {d?.homeArea}</div>

 
</div>


</div>

    </div>)
})
}



</div>
</div>
            
        </div>
    );
};

export default Properties;