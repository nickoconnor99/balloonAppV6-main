import { Link, NavLink } from "react-router-dom";
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import NavLinks from "./NavLinks";
import logo from '../assets/360080291_200675059594451_4048102465236019403_n.jpg'
const Navbar = () => {

    return (
        <nav className='bg-base-200'>
            <div className='navbar align-element'>
                <div className='navbar-start'>
                    {/* TITLE */}
                    <NavLink
                        to='/'
                        className='hidden lg:flex text-3xl items-center'
                    >
                        <img style={{
                            width: '30%',
                        }} src={logo}></img>
                    </NavLink>
                    {/* DROPDOWN */}
                    <div className='dropdown'>
                        <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                            <FaBarsStaggered className='h-6 w-6' />
                        </label>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
                        >
                            <NavLinks />
                        </ul>
                    </div>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal'>
                        <NavLinks />
                    </ul>
                </div>

            </div>
        </nav>
    );
};
export default Navbar
