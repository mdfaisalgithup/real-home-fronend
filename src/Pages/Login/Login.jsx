
const Login = () => {
    return (
        <div className="h-[100vh]">
         

            <div className="flex justify-center items-center h-full">


        
<div className="bg-[#fff] p-10 rounded-md shadow-md">  
 <h2 className="text-center my-4">Login</h2>
<form action="">
                
                <div className="space-y-3">
                <input className="w-full  border-[1px] p-3 rounded-md outline-none" type="text" placeholder="Write Your Email" />
                <input className="w-full border-[1px]  p-3 outline-none rounded-md" type="text" placeholder="Write Your Password" />
                
                <div className="mx-auto w-max">
                <input className="border-[1px] hover:bg-red-600 cursor-pointer rounded-md px-4 py-2 bg-red-500 font-bold text-white" type="submit" value="Log In" />
                </div>
                       
                </div>         </form>
</div>


            </div>
            
        </div>
    );
};

export default Login;