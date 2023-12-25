import NavBar from "../../Share/NavBar/NavBar";
import "./Home.css"
import "./../../Share/NavBar/NavBar.css"
import { useEffect, useState } from "react";
import { RiMapPin2Line } from "react-icons/ri";

import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdOutlineHomeWork } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";



const Home = () => {
const [data, setData] = useState([])

useEffect(() => {

    fetch("http://localhost:5000/mainproduct")
    .then(res => res.json())
    .then(d => {
        setData(d)
    })


}, [])











    return (<>
        <div className="addimage relative">
  
  <div className="bg-[#00000097] h-full w-full">
<div className="absolute top-0 z-50 w-full">
<div className="py-[25px] font-bold  px-[30px] text-white"><NavBar></NavBar></div>
</div>
</div>

<div className="absolute top-0 w-full h-full">

<div className="flex justify-center xl:flex-row flex-col items-center w-full h-full">

<div>

<div className="text-center w-full">
<h2 className="text-white font-bold text-[50px]"> Find Your Dream Home</h2>
<p className="my-4 font-semibold text-white text-[17px]">From as low as $10 per day with limited time offer discounts</p>
</div>


<div className="flex gap-2 justify-center">
<button className="bg-[#fff] hover:text-white hover:bg-red-500 rounded-md px-6 py-3 font-bold">Rent</button>

<button className="bg-[#fff] hover:text-white hover:bg-red-500 rounded-md px-6 py-3 font-bold">Sale</button>
</div>


<div className="my-4">

    <form>   
     <div className="bg-[#ffffff5d] p-3 rounded-md">
<div className="flex gap-4 rounded-md items-center bg-[#fff] p-4">
<div>
<input className="outline-none p-3 w-[280px] rounded-md border-[1px] placeholder-black" type="text" name="keywords" id="" placeholder="enter keyword..." />
</div>

<div>
<select className="outline-none p-3 rounded-md border-[1px]" name="optionSelect">
<option value="Property Type">Property Type</option>
<option value="apartment">Apartment</option>
<option value="condo">Condo</option>
<option value="familyhouse">Family House</option>
</select>
</div>

<div>
<input className="outline-none placeholder-black p-3 rounded-md border-[1px]" type="text" name="rooms" placeholder="Location" />
</div>

<div>
<select className="outline-none p-3 rounded-md border-[1px]" name="roomSelect">
<option value="x1">x1</option>
<option value="x2">x2</option>
<option value="x3">x3</option>
<option value="x4">x4</option>
</select>
</div>

<div>
<button className="font-bold text-black">Advanced</button>
</div>


<div>
<input type="submit" className="px-6 py-3 bg-red-500 rounded-md font-bold text-white" value="Search" />
</div>

</div>

</div>


<div>
<div className="bg-[#fff] rounded-md my-4">
 

 <div className="grid-cols-3 grid grid-rows-3 p-6">
 <div>
 
 <div>
 <input className="mr-2" type="checkbox" id="airConditioning" name="airConditioning" /><label htmlFor="airConditioning">Air Conditioning</label>
 </div>
 
 
 
 </div>
 
 <div>
 <input className="mr-2" type="checkbox" id="Barbeque" name="barbeque" /><label htmlFor="Barbeque">Barbeque</label>
 </div>
 
 <div>
 <input className="mr-2" type="checkbox" id="Dryer" name="dryer" /><label htmlFor="Dryer">Dryer</label>
 </div>
 
 <div>
 <input className="mr-2" type="checkbox" id="Laundry" name="laundry" /><label htmlFor="Laundry">Laundry</label>
 </div>
 
 
 <div>
 <input className="mr-2" type="checkbox" id="Lawn" name="lawn" /><label htmlFor="Lawn">Lawn</label>
 </div>
 
 
 <div>
 <input className="mr-2" type="checkbox" id="Microwave" name="microwave" /><label htmlFor="Microwave">Microwave</label>
 </div>
 
 <div>
 <input className="mr-2" type="checkbox" id="OutdoorShower" name="outdoorShower" /><label htmlFor="OutdoorShower">Outdoor Shower</label>
 </div>
 
 <div>
 <input className="mr-2" type="checkbox" id="Refrigerator" name="refrigerator" /><label htmlFor="Refrigerator">Refrigerator</label>
 </div>
 
 
 <div>
 <input className="mr-2" type="checkbox" id="Sauna" name="sauna" /><label htmlFor="Sauna">Sauna</label>
 </div>
 </div>
 
<div>
    <hr />

<div className="flex gap-2 py-4 items-center px-6">
<div className="w-full">
<select className="outline-none w-full p-3 rounded-md border-[1px]" name="baths">
   <option value="bathsany">Baths: Any</option> 
<option value="x1">x1</option>
<option value="x2">x2</option>
<option value="x3">x3</option>
<option value="x4">x4</option>
</select>
</div>


<div className="w-full">
<select className="outline-none w-full p-3 rounded-md border-[1px]" name="beds">
    <option value="bedsany">Beds: Any</option>
<option value="x1">x1</option>
<option value="x2">x2</option>
<option value="x3">x3</option>
<option value="x4">x4</option>
</select>
</div>

<div className="w-[80%]">
<h2 className="my-2 text-[15px] font-bold">Home Area (Sqft) 0 - 350</h2>
<input className="w-full" type="range" name="" id="" />
</div>

<div className="w-[80%]">
<h2 className="my-2 text-[15px] font-bold">From $0 to $8000</h2>
<input className="w-full" type="range" name="" id="" />
</div>


</div>

</div> 
 
 </div>



</div>


</form>






</div>

</div>
</div>



</div>

</div>


{/* Featured Properties start */}

<div className="my-10 xl:mx-[240px] lg:mx-[150px] md:mx-[50px] mx-[10px]">
<div>
<h2 className="font-bold text-center my-2 text-[35px] text=[#484848]">Featured Properties</h2>
<p className="text-center text-[16px]">Handpicked properties by our team</p>
</div>

 <div className="my-4">
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

{/* Featured Properties end */}


<div className="my-4 mx-[30px]">

<div className="text-center my-2">
    <h2 className="font-bold text-[25px]">Why Choose Us</h2>
   
   <p className="text-[#868484] my-2">We provide full service at every step</p>

</div>

<div className="flex xl:flex-row flex-wrap justify-center items-center gap-10">


<div className="bg-[#fff] transition-all hover:bg-red-400 hover:text-white w-[400px] flex items-center rounded-md h-[300px] shadow-md">
<div>
<div className="bg-red-100 w-max   rounded-full mx-auto p-5">
        <VscWorkspaceTrusted className="text-[70px] text-red-400 p-2"></VscWorkspaceTrusted>
    </div>
    <div className="text-center">
        <h2 className="text-[20px] my-3">Wide Renge Of Properties</h2>

        
        <div className="mx-auto w-[80%]">
<p className="text-[14px] hover:text-white text-[#757575]">Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim vitae mauris  donec vel lectus vel felis.</p>
        </div>

    </div>
</div>
</div>



<div className="bg-[#fff] transition-all hover:bg-red-400 hover:text-white w-[400px] flex items-center rounded-md h-[300px] shadow-md">
<div>
<div className="bg-red-100 w-max   rounded-full mx-auto p-5">
        <MdOutlineHomeWork className="text-[70px] text-red-400 p-2"></MdOutlineHomeWork>
    </div>
    <div className="text-center">
        <h2 className="text-[20px] my-3">Wide Renge Of Properties</h2>

        
        <div className="mx-auto w-[80%]">
<p className="text-[14px] hover:text-white text-[#757575]">Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim vitae mauris  donec vel lectus vel felis.</p>
        </div>

    </div>
</div>
</div>


<div className="bg-[#fff] transition-all hover:bg-red-400 hover:text-white w-[400px] flex items-center rounded-md h-[300px] shadow-md">
<div>
<div className="bg-red-100 w-max   rounded-full mx-auto p-5">
        <GiTakeMyMoney className="text-[70px] text-red-400 p-2"></GiTakeMyMoney>
    </div>
    <div className="text-center">
        <h2 className="text-[20px] my-3">Wide Renge Of Properties</h2>

        
        <div className="mx-auto w-[80%]">
<p className="text-[14px] hover:text-white text-[#757575]">Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim vitae mauris  donec vel lectus vel felis.</p>
        </div>

    </div>
</div>
</div>










</div>


</div>

</>
    );
};

export default Home;