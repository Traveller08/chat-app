import React , {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { RiChatSmile3Fill } from 'react-icons/ri';
import {AiFillHome} from 'react-icons/ai';
import {FaFacebookMessenger} from 'react-icons/fa';
import {MdOutlineAddBox} from 'react-icons/md';
import Button from './Button';
import './Navbar.css'
import {IconContext} from 'react-icons/lib';
import {RiAccountCircleFill} from 'react-icons/ri'
function Navbar() {
    const [click,setClick] = useState(false);

    const handleClick =()=>setClick(!click);
    const [button,setButton] = useState(true);
    const closeMobileMenu =()=>setClick(false);
    const showButton =() =>{
        if(window.innerWidth<=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };
    useEffect(() => {
       showButton();
    }, []);
    window.addEventListener('resize',showButton);
    return (
        <>
           <IconContext.Provider value={{color:'black'}}>
            <div className="navbar">
              <div className="navbar-container container">
                <Link to="/" className="navbar-logo" 
                  onClick={closeMobileMenu}
                  style={{fontWeight:"900"}}
                >
                   
                    Chit Chat
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                           <AiFillHome style={{color:"black",fontSize:"24px"}}/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/direct/inbox' className="nav-links" onClick={closeMobileMenu}>
                            <FaFacebookMessenger style={{color:"black",fontSize:"24px"}} />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/create' className="nav-links" onClick={closeMobileMenu}>
                            <MdOutlineAddBox  style={{color:"black",fontSize:"24px"}} />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/profile' className="nav-links" onClick={closeMobileMenu}>
                            <RiAccountCircleFill style={{color:"black",fontSize:"24px"}} />
                        </Link>
                    </li>
                    {/* <li className="nav-btn">
                        {button ? (
                            <Link to='/sign-up'className="btn-link" onClick={closeMobileMenu}>
                                <Button buttonStyle='btn-outline' >
                                    SIGN UP
                                </Button>
                            </Link>
                        ):(
                            <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                             <Button 
                             buttonStyle='btn-outline'
                             buttonSize='btn-mobile'
                             >
                                SIGN UP
                            </Button>
                          </Link>
                        )
                    }
                    </li> */}
                </ul>
              </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
