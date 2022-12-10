import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='w-full bg-base-300'>
            <footer className="footer py-20 max-w-screen-xl mx-auto bg-base-300 text-black">
                <div className='w-44'>
                    <img className='w-full' src="https://i.ibb.co/qsKYLF9/Logo.png" alt="" />
                    <p>Capturra Lansetional<br />Providing Afordable Photo Service Since 2020</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                    <Link to='/' className="link link-hover">Marketing</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span to='/' className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;