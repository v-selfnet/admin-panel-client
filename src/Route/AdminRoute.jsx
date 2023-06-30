import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(user && isAdmin) return children;
    if(loading && isAdminLoading) return <progress className="progress w-56"></progress>
    
    return <Navigate to='/signin' state={{fron: location}} replace></Navigate>
};

export default AdminRoute;