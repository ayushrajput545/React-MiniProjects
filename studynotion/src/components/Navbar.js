import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = (props)=>{

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;



    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] mx-auto py-4'>

            <Link to="/"> <img src={logo} alt='Logo' width={160} height={32} loading='lazy'></img></Link>
            <nav>
                <ul className='flex gap-x-6 text-slate-300 '>
                    <li>
                        <Link to="/" >Home</Link>

                    </li>

                    <li>
                        <Link to="/">About</Link>

                    </li>

                    <li>
                        <Link to="/">Contact</Link>

                    </li>

                    
                </ul>
            </nav>

             {/* Login - Signup - Logout - DashBoard Buttons */}

              <div className='flex items-center gap-x-4'>
                {
                    !isLoggedIn &&             // When this conditionn is true then show login button
                   <Link to='/login'> <button className='bg-slate-800 text-slate-300 py-[8px] px-[12px] rounded-[8px] border border-black '>Login</button></Link>
                }

                {
                    !isLoggedIn && //Show login and sighup button when your are not login
                   <Link to='/signup' className='bg-slate-800 text-slate-300 py-[8px] px-[12px] rounded-[8px] border border-black '> <button>Sign up</button></Link>
                }

                {
                    isLoggedIn &&
                   <Link to='/' > <button className='bg-slate-800 text-slate-300 py-[8px] px-[12px] rounded-[8px] border border-black ' 
                      onClick={()=>{
                    setIsLoggedIn(false);
                    toast.success("Logged out");
                   }}>Log Out</button></Link>
                }

                {
                    isLoggedIn &&
                   <Link to='/dashboard'> <button className='bg-slate-800 text-slate-300 py-[8px] px-[12px] rounded-[8px] border border-black '>Dashboard</button></Link>
                }
            
            </div>
        </div>
    )
}

export default Navbar;