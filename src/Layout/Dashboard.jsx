import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { FaCpanel, FaHome, FaSignOutAlt, FaUserCog } from "react-icons/fa";
import moment from "moment";

const Dashboard = () => {
    let currentYear = moment().format('YYYY');
    const isAdmin = true;

    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-green-200 text-base-content">
                        {/* Sidebar content here */}
                        <div className="flex flex-col items-center">

                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="" />
                                </div>
                            </label>
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
                        <div className="divider"></div>
                        <li><Link><FaSignOutAlt className="text-xl" />Signout</Link></li>
                        <div className="flex flex-col items-center">
                            <Link to={'/'} className='text-7xl text-black absolute bottom-10'><FaCpanel /></Link>
                            <p className="absolute bottom-5"><small>&copy;&nbsp; vSELFNet {currentYear} - All right reserved</small></p>

                        </div>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;