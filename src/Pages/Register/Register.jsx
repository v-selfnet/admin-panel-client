import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosBaseUrl from "../../Hooks/useAxiosBaseUrl";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useAuth();
    const [axiosBaseUrl] = useAxiosBaseUrl();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser)
                // update user
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        alert('user update success')
                        axiosBaseUrl.post('/users', {
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
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$&*])/
                                })} placeholder="password" required className="input input-bordered" />
                                {/* password error handel */}
                                {
                                    errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>
                                }
                                {
                                    errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be six characters</p>
                                }
                                {
                                    errors.password?.type === 'maxLength' && <p className='text-red-600'>Password must be less than twenty characters</p>
                                }
                                {
                                    errors.password?.type === 'pattern' && <p className='text-red-600'>Password must be [one upper], [one lower], [one digit] & [one special] characters</p>
                                }
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
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;