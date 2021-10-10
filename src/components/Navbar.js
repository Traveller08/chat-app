import React , {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';
import {FaFacebookMessenger} from 'react-icons/fa';
import {MdOutlineAddBox} from 'react-icons/md';
import './Navbar.css'
import {IconContext} from 'react-icons/lib';
import {RiAccountCircleFill} from 'react-icons/ri'
import {BsSearch} from "react-icons/bs";
function Navbr() {
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
            <div className="navbr">
              <div className="navbr-container container">
                <Link to="/home" className="navbr-logo" 
                  onClick={closeMobileMenu}
                  style={{fontWeight:"900"}}
                >
                   
                    Chit Chat
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
                </div>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item  m-rght">
                        <div className="nav-links">
                            <div className="input-grp-div">
                               <BsSearch className='search-icon'/>
                               <input className="grp-input" style={{fontSize:"14px"}}></input>
                            </div>
                           
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to='/home' className="nav-links" onClick={closeMobileMenu}>
                           <AiFillHome style={{fontSize:"24px"}} className="icn"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/direct/inbox' className="nav-links" onClick={closeMobileMenu}>
                            <FaFacebookMessenger style={{fontSize:"24px"}} className="icn"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/create' className="nav-links" onClick={closeMobileMenu}>
                            <MdOutlineAddBox  style={{fontSize:"24px"}} className="icn"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/profile' className="nav-links" onClick={closeMobileMenu}>
                            <RiAccountCircleFill style={{fontSize:"24px"}} className="icn" />
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

export default Navbr;
