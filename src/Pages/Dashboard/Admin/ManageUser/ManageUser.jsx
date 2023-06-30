import { useQuery } from "@tanstack/react-query";
import useAxiosBaseUrl from "../../../../Hooks/useAxiosBaseUrl";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ManageUser = () => {
    const [axioxBaseUrl] = useAxiosBaseUrl();
    const { removeUser, user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure()

    // user data load
    // const { data: users = [], refetch } = useQuery(['users'], async () => {
    //     const res = await axioxBaseUrl.get('/users')
    //     return res.data;
    // })

    const {data: users = []} = useQuery({
        queryKey: ['users', user?.email ],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?email=${user?.email}`)
            console.log('fron manageuser', res)
            return res.data;
        }
    })

    // change user role
    // const handleMakeAdmin = user => {
    //     console.log(user._id)
    //     axioxBaseUrl.patch(`/users/admin/${user._id}`)
    //     .then(res => {
    //         console.log(res)
    //         console.log(res.data)
    //         refetch();
    //         alert(`[${user.name}] is sucessfully becone an Admin`)
    //     }).catch(error => alert('Axios:', error));
    // }

    // delete user
    // const handleDelete = user => {
    //     // delete user from mongodb
    //     axioxBaseUrl.delete(`/users/${user._id}`)
    //         .then(res => {
    //             // deletedCount property of MongoDB
    //             if (res.data.deletedCount > 0) {
    //                 // TODO: only deleted currently loggenin user. other user delete?
    //                 removeUser().then(() => {
    //                     refetch();
    //                     alert(`[${user.name}] is sucessfully deleted`)
    //                 }).catch(error => alert('Firebase:', error))
    //             }
    //         }).catch(error => alert('Axios:', error))
    // }

    return (

        <div>
            <h3 className="text-center text-2xl font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-pin-rows table-pin-cols">
                    {/* head */}
                    <thead className="text-base text-red-800">
                        <tr className="rounded-lg">
                            <th className="bg-green-200 rounded-l-xl">#</th>
                            <th className="bg-green-200">Photo</th>
                            <th className="bg-green-200">Name</th>
                            <th className="bg-green-200">Email</th>
                            <th className="bg-green-200">Password</th>
                            <th className="bg-green-200">Role</th>
                            <th className="bg-green-200 rounded-r-xl">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <th> 
                                    {
                                        user.role === 'admin' ?
                                        <button className="btn btn-xs bg-green-200">Admin</button>:
                                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-xs">user</button>

                                    }
                                    </th>
                                <th><button onClick={() => handleDelete(user)} className="btn btn-xs">Delete</button></th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUser;