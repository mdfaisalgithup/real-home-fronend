import { Link } from "react-router-dom";


import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialSkype } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { SlSocialSpotify } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";

import { GrNext } from "react-icons/gr";

const Footer = () => {
    return (<>
        <div className="bg-[#202040]">
        <div className="xl:mx-[240px] lg:mx-[150px] md:mx-[50px] mx-[10px] ">



<div className="h-max flex justify-center items-center ">

<div className="flex xl:items-baseline items-center justify-between text-white xl:flex-row flex-col gap-6">

<div className="xl:w-[30%] lg:w-[30%] w-[100%]">
    <h2 className="font-bold">About Site</h2>
    <p className="my-2 text-[#9c9b9b]">We’re reimagining how you buy, sell and
rent. It’s now easier to get into a place you
love. So let’s do this, together.</p>
</div>

<div className="flex-1">
<h2 className="font-bold my-4">Quick Links</h2>

<div className="text-[#9c9b9b] space-y-2">
<div><Link>About Us</Link></div>
<div><Link>Terms & Conditions</Link></div>
<div><Link>User’s Guide</Link></div>
<div><Link>Support Center</Link></div>
<div><Link>Press Info</Link></div>
</div>
</div>

<div className="flex-1">
<h2 className="font-bold my-4">Contact Us</h2>
<div className="space-y-3 text-[#9c9b9b]">
<h2>info@findhouse.com</h2>
<p>Collins Street West, Victoria
8007, Australia.</p>
<h2>+1 246-345-0695</h2>
</div>
</div>


<div className="flex-1">

<h2 className="font-bold">Follow us</h2>

<div  className="flex gap-3 items-center my-3">
<TiSocialFacebookCircular className="text-[27px]"></TiSocialFacebookCircular>
<TiSocialLinkedin className="text-[27px]"></TiSocialLinkedin>
<TiSocialPinterestCircular className="text-[27px]"></TiSocialPinterestCircular>
<TiSocialYoutube className="text-[27px]"></TiSocialYoutube>
<TiSocialSkype className="text-[27px]"></TiSocialSkype>
<TiSocialInstagramCircular className="text-[27px]"></TiSocialInstagramCircular>
<SlSocialSpotify className="text-[27px]"></SlSocialSpotify>
<SlSocialGoogle></SlSocialGoogle>
</div>

<h2 className="font-bold my-2">Subscribe</h2>
<div>

<div className="flex gap-2 items-center">
<input className="py-3 px-5 text-black placeholder:text-black outline-none my-2 rounded-full" type="text" placeholder="Your email" />
<div>
<button className="bg-[#fff] hover:bg-orange-500 text-black text-[25px] rounded-full p-[12px] hover:text-white font-bold"><GrNext></GrNext></button>
</div>
</div>

</div>

</div>





</div>

</div>




        </div>
        </div>
        
        <div className="bg-[#1A1A38]">
            <div className="mx-[240px] h-[100px]">
            <div className="flex justify-between items-center h-full">
              
              <div className="flex gap-4 text-[#9c9b9b]">
                <div><Link>Home</Link></div>
                <div><Link>Listing</Link></div>
                <div><Link>Property</Link></div>
                <div><Link>Pages </Link></div>
                <div><Link>Blog</Link></div>
                <div><Link>Contact</Link></div>
                 
              </div>

              <div className="text-[#9c9b9b]">
                <h2>© 2020 Homeo. Made with love.</h2>
              </div>


            </div>
</div>
        </div>
        
        
        </>
    );
};

export default Footer;