import React from 'react';
import './Header.scss';
import Avatar from '@material-ui/core/Avatar';
import Watch from '../../icons/watch/Watch';
import Home from '../../icons/home/Home';
import PeopleAll from '../../icons/people/PeopleAll';
import PeopleGroup from '../../icons/people/PeopleGroup';
import Store from '../../icons/store/Store';
import Menu from '../../icons/menu/Menu';
import { BiSearch } from 'react-icons/bi';
import { FaFacebookMessenger, FaBell} from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
 






const Header = () => {
    return (
        
        <div className="header">
            <div className="header__left">
                <div className="header__logo">
                    <a href="/#">
                        <img 
                            src="https://play-lh.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg=s180-rw"
                            alt="facebook logo"
                        ></img>
                    </a>
                </div>

                <div className="header__input">
                    <span className="search">
                        <BiSearch/>
                    </span>
                    <input
                        type="search"
                        placeholder="Search Facebook"
                     />
                </div>
            </div>

            <div className="header__center">
                <div className="header__nav-list">
                    <div className="header__nav-list-item is-active">
                        <a 
                            className="header__nav-list-item-link is-active" 
                            href="/#"
                        >
                            <span className="header__nav-list-item-icon">
                                <Home
                                    fill={'#65676b'}
                                    width={28}
                                    height={28}
                                />   
                            </span>
                        </a>
                    </div>

                    <div className="header__nav-list-item">
                        <a className="header__nav-list-item-link" href="/#">
                            <span className="header__nav-list-item-icon">
                                <PeopleAll
                                    fill={'#65676b'}
                                    width={28}
                                    height={28}
                                />  
                            </span>
                        </a>
                    </div>

                    <div className="header__nav-list-item">
                        <a className="header__nav-list-item-link" href="/#">
                            <span className="header__nav-list-item-icon">
                                <Watch
                                    fill={'#65676b'}
                                    width={28}
                                    height={28}
                                />
                            </span>
                        </a>
                    </div>

                    <div className="header__nav-list-item">
                        <a className="header__nav-list-item-link" href="/#">
                            <span className="header__nav-list-item-icon">
                                <Store
                                    fill={'#65676b'}
                                    width={28}
                                    height={28}
                                />    
                            </span>
                        </a>
                    </div>

                    <div className="header__nav-list-item">
                        <a className="header__nav-list-item-link" href="/#">
                            <span className="header__nav-list-item-icon">
                                <PeopleGroup
                                    fill={'#65676b'}
                                    width={28}
                                    height={28}
                                />
                            </span>
                        </a>
                    </div> 
                </div>
            </div>

            <div className="header__right">
                <a href="/#" className="header__avatar">
                    <Avatar 
                    />
                    <span className="header__avatar-name">Jezy</span>
                </a>

                <div className="header__options">
                    <div className="header__options-item">
                        <Menu
                            width={20}
                            height={20}
                        /> 
                    </div>

                    <div className="header__options-item">
                        <FaFacebookMessenger/>    
                    </div> 

                    <div className="header__options-item">
                        <FaBell/>   
                    </div> 

                    <div className="header__options-item">
                        <IoMdArrowDropdown/>     
                    </div> 
                </div>
            </div>   
        </div>
    );

}

export default Header;