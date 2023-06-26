import { FaCpanel, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import moment from 'moment';

const Footer = () => {
    let currentYear = moment().format('YYYY');

    return (
        <div>
            <footer className="lg:footer p-10 bg-green-100 text-base-content hidden">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="lg:footer px-10 py-4 border-t bg-neutral">
                <div className="items-center">
                    <a className='text-7xl text-red-600'><FaCpanel /></a>
                    <p><small className='text-white'>&copy;&nbsp; vSELFNet {currentYear} - All right reserved</small></p>
                </div>
                <div className="lg:place-self-center lg:justify-self-end">
                    <div className="flex gap-4 text-2xl text-red-500">
                        <a><FaTwitter /></a>
                        <a><FaYoutube /></a>
                        <a><FaFacebook /></a>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;