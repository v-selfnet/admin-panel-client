import { FaCpanel } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navMenu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/signin'>Signin</Link></li>
        <li><Link>Signout</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-green-100">
                <div className="navbar-start">
                    <Link to={'/'} className='text-7xl text-red-600'><FaCpanel /></Link>
                </div>
                {/* main menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navMenu}
                    </ul>
                </div>

                <div className="navbar-end">
                    {/* profile foto */}
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="" />
                        </div>
                    </label>

                    {/* dropdown menu */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-green-100 rounded-box w-52">
                            {navMenu}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;