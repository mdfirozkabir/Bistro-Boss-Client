import { NavLink } from 'react-router-dom';

const NavBar = () => {


    const navLinks = <>
        <li className='mr-2'><NavLink to='/'>Home</NavLink></li>
        <li className='mr-2'><NavLink to='/contactUs'>Contact Us</NavLink></li>
        <li className='mr-2'><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li className='mr-2'><NavLink to='/menu'>Our Menu</NavLink></li>
        <li className='mr-2'><NavLink to='/ourShop'>Our Shop</NavLink></li>

    </>

    return (
        <>
            <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;