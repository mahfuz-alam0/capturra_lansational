import React from 'react'; import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';



const Header = () => {

    const { user, sign_out } = React.useContext(AuthContext);

    const handle_sign_out = () => {
        sign_out()
            .then(() => {
                localStorage.removeItem('Capturra_token');
            });
    }

    const menu_items = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/all_services'>Services</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blogs</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/myReview'>My Review</Link></li>
                    <li className='font-semibold'><Link to='/add_service'>Add Services</Link></li>
                    <li className='font-semibold'>
                        <button onClick={handle_sign_out}>SignOut</button>
                    </li>
                </>
                :
                <>
                    <li className='font-semibold'><Link to='/login'>Login</Link></li>
                    <li className='font-semibold'><Link to='/signup'>SignUp</Link></li>
                </>
        }
    </>

    return (
        <div className='bg-base-300'>
            <div className="navbar bg-base-300 h-30 max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu_items}
                        </ul>
                    </div>

                    <Link to='/' className="normal-case text-xl w-32">
                        <img src="https://i.ibb.co/qsKYLF9/Logo.png" alt="" />
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menu_items}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;