import { FaCpanel, FaEnvelope, FaFacebook, FaGlobe, FaPhoneSquare, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Footer = () => {
    let currentYear = moment().format('YYYY');

    return (
        <div>
            <footer className="lg:footer p-10 bg-green-100 text-base-content justify-evenly hidden">
                <div>
                    <span className="footer-title">Contact</span>
                    <p className='flex gap-2 items-center'><FaEnvelope/>Via Giuseppe Chiovenda 96, <br />00173 Roma, Italia</p>
                    <p className='flex gap-2 items-center'><FaWhatsapp/>+39 349 44 234 95</p>
                    <p className='flex gap-2 items-center'><FaPhoneSquare/>+06 752 452 126</p>
                    <p className='flex gap-2 items-center'><FaEnvelope/>info@v5n.it</p>
                    <p className='flex gap-2 items-center'><FaGlobe/>www.v5n.it</p>

                </div>
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
                <div className="flex flex-col items-center">
                    <Link to={'/'} className='text-7xl text-white'><FaCpanel /></Link>
                    <p><small className='text-white'>&copy;&nbsp; vSELFNet {currentYear} - All right reserved</small></p>
                </div>
                <div className="lg:place-self-center lg:justify-self-end text-2xl text-white mt-6">
                    <div className="flex gap-4 items-center justify-center">
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