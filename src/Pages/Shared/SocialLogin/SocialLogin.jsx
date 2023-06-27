import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import useAuth from '../../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useAxiosBaseUrl from '../../../Hooks/useAxiosBaseUrl';

const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();
    const [axiosBaseUrl] = useAxiosBaseUrl();

    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                axiosBaseUrl.post('/users', {
                    name: loggedUser.displayName,
                    email: loggedUser.email,
                    password: loggedUser?.password ? loggedUser.password : 'N/A',
                    image: loggedUser.photoURL
                })
                alert('Google Login Success')
                navigate('/');
            }).catch(error => console.log(error))
    }

    return (
        <div className="text-center">
            <div className="divider">or</div>
            <div className="flex justify-evenly">
                <button onClick={handleGoogleSignIn} className="btn btn-circle text-2xl">
                    <FaGoogle></FaGoogle>
                </button>
                <button className="btn btn-circle text-2xl">
                    <FaGithub></FaGithub>
                </button>
                <button className="btn btn-circle text-2xl">
                    <FaFacebook></FaFacebook>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;