import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { FaCpanel, FaHome, FaSignOutAlt, FaUserCog } from "react-icons/fa";
import moment from "moment";
import useAuth from "../Hooks/useAuth";
import logo from '/user-solid.svg'
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const { user, logOut } = useAuth();
    let currentYear = moment().format('YYYY');
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    const handleSignout = () => {
        logOut()
            .then(() => {
                alert('Logout Success')
                console.log('Logout Success from dashboard')
            }).catch(error => alert('Dashboard Signout Error:', error))
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center mt-20">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>

                <div className="drawer-side mt-20 rounded-r-3xl">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-slate-200 text-base-content">
                        {/* Sidebar content here */}
                        <div className="flex flex-col items-center my-6">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL ? user.photoURL : logo} />
                                </div>
                            </label>
                            {user?.displayName ? user.displayName : user.email}
                        </div>
                        <div className="divider"></div>
                        {
                            isAdmin ?
                                <>
                                    <li><Link to='/dashboard/adminhome'><FaHome className="text-xl" />Admin Home</Link></li>
                                    <li><Link to='/dashboard/manageuser'><FaUserCog className="text-xl" />Manage User</Link></li>
                                </> : <>
                                    <li><Link to='/dashboard/userhome'><FaHome className="text-xl" />User Home</Link></li>
                                </>
                        }
                        <li><Link onClick={handleSignout}><FaSignOutAlt className="text-xl" />Signout</Link></li>
                        <div className="flex flex-col items-center">
                            <Link to={'/'} className='text-7xl text-black absolute bottom-10'><FaCpanel /></Link>
                            <p className="absolute bottom-5"><small>&copy;&nbsp; vSELFNet {currentYear} - All right reserved</small></p>
                        </div>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Dashboard;