import LogoNavbar from './Logonavbar.svg'
import BellIcon from './bell.svg'
import UserIcon from './usertest.svg'
import Chevrondown from './Vector.svg'
import './Navbar.css'


const Navbar = () => {
    return (
    <div className="navbar">
        <div className="navbar-container">
            <div className='logo'>
                <img src={LogoNavbar} />
            </div>
           
           <div className='user-menu'>
               <div className='t'>
                    <img className='alert' src={BellIcon} />
                    <img className='user-icon' src={UserIcon} />
                    <span className='user-name'> Akkarapol </span>
                    <img className='chevron' src={Chevrondown} alt="" />
                </div>
            </div> 
                
           
        </div>


    </div>
    );
}

export default Navbar;