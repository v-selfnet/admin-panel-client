import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from 'axios';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useAuth();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser)
                // update user
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        alert('user update success')
                        axios.post('http://localhost:3000/users', {
                            name: data.name,
                            email: data.email,
                            password: data.password,
                            image: data.photo
                        }).then(res => console.log(res.data))
                        reset();
                    }).catch(error => { alert('update user error handle', error) })
            }).catch(error => { alert('create new user error handle: ', error) })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Please Register!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name")} placeholder="name" required className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} placeholder="email" required className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password")} placeholder="password" required className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" {...register("photo")} placeholder="photo link" required className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className="flex justify-between mt-6">
                                <label className="label">
                                    <Link to='/signin' className="label-text-alt link link-hover">Already have an account</Link>
                                </label>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;