import React from 'react'
import '../../css/Header/header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


function Header() {
    return (
        <div>
            <div className='header'>
                <div className='container d-flex justify-content-between'>
                    <img className='col-2' src='./images/logo.png' alt='' />
                    <div className="d-flex inputSearsh col-5">
                        <input type="text" className="form-control" placeholder="Search..." aria-label="Search" />
                        <button className="btn" type="button"><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                    <div className='col-2 d-flex contactInfo'>
                        <div className='userIcon'><img src='./images/headset.png' alt='' /></div>
                        <div>
                            <p>hagr09@gmail.com</p>
                            <p>01013116699</p>
                        </div>
                    </div>
                    <div className='col-1 icons d-flex justify-content-between'>
                        <FontAwesomeIcon icon={faHeart} />
                        <span className='count countHeart'>0</span>
                        <FontAwesomeIcon icon={faBagShopping} />
                        <span className='count countBagShopping'>0</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;