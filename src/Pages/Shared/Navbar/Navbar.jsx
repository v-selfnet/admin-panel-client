import { FaCpanel } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from '/user-solid.svg'

const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleSignout = () => {
        logOut()
            .then(() => {
                alert('Signout Success');
            }).catch(error => alert('Dashboard Signout Error:', error))
    }
    const navMenu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        {
            user ?
                <li><Link onClick={handleSignout}>Signout</Link></li>
                : <>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/signin'>Signin</Link></li>
                </>
        }
    </>
    return (
        <div className="navbar fixed z-10 bg-neutral opacity-80 px-10 py-1 rounded-br-full">
            {/* logo */}
            <div className="navbar-start">
                <Link to={'/'} className='text-7xl text-white'><FaCpanel /></Link>
            </div>
            {/* main menu */}
            <div className="navbar-center hidden lg:flex bg-red-300 font-bold text-base rounded-xl">
                <ul className="menu menu-horizontal px-6">
                    {navMenu}
                </ul>
            </div>

            <div className="navbar-end font-bold text-white">
                {user ? user.displayName : ''}
                {/* profile foto */}
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar ml-4">
                    <div className="w-10 rounded-full">
                        <img className="w-10 rounded-full z-10" src={user?.photoURL ? user.photoURL : logo} />
                    </div>
                </label>

                {/* dropdown menu */}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;