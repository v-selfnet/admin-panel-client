import { useQuery } from "@tanstack/react-query";
import useAxiosBaseUrl from "../../../../Hooks/useAxiosBaseUrl";

const ManageUser = () => {
    const [axioxBaseUrl] = useAxiosBaseUrl();

    // user data load
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axioxBaseUrl.get('/users')
        return res.data;
    })

    // change user role
    const handleMakeAdmin = user => {
        console.log(user._id)
    }

    // delete user
    const handleDelete = user => {
        console.log(user._id)
    }

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
                                <td>{index +1}</td>
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
                                <th><button onClick={() => handleMakeAdmin(user)} className="btn btn-xs">user</button></th>
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