import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import useAxiosBaseUrl from "../../Hooks/useAxiosBaseUrl";

const Signin = () => {
    const { register, handleSubmit, reset } = useForm();
    const { signIn } = useAuth();
    const [axiosBaseUrl] = useAxiosBaseUrl();

    //private route
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    console.log(from);

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                // console.log('signin logged user', loggedUser)
                // console.log('signin logged user uid', loggedUser.uid)
                axiosBaseUrl.post('/users', {
                    name: loggedUser?.displayName ? loggedUser.displayName : 'N/A',
                    email: data.email,
                    password: data.password,
                    image: loggedUser?.photoURL ? loggedUser.photoURL : 'N/A',
                    googleUid: loggedUser?.uid
                }).then(res => {
                    console.log(res)
                    if (res.data.insertedId) {
                        reset();
                        alert('Signin Success found insertedId!!!')
                        // redirect private route
                        navigate(from, { replace: true })
                    }
                    else {
                        reset();
                        alert('Signin Success. not found insertedId !!!')
                        // redirect private route
                        navigate(from, { replace: true })
                        alert(res.data.message)
                    }
                }).catch(error => { alert('Axios', error) })
            }).catch(error => { alert('Signin', error) })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left ">
                    <h1 className="text-3xl font-bold">Please Signin!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Signin</button>
                            </div>
                            <div className="flex justify-between mt-6">
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <Link to='/register' className="label-text-alt link link-hover">Do not have an account?</Link>
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

export default Signin;