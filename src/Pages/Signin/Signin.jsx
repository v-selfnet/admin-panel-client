import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signin = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
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
                                        <Link to='/signin' className="label-text-alt link link-hover">Do not have an account?</Link>
                                    </label>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Signin;