import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faHandHoldingUsd, faHandshake, faMobileAlt, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons' 

library.add(faFacebookF); 

const Footer = () => {
    return (
        <div class='container-fluid'>
    <div class="footer-card">
        <div class="heading text-center">
            <div class="head1">Just Scratching the Surface</div>
            <p class="bdr"></p>
        </div>
        <div class="card-body">
            <div class="row m-0 pt-5">
                <div class="footer-card col-12 col-md-3">
                    <div class="card-content"> 
                    <FontAwesomeIcon className="fas fa-hand-holding-usd fa-3x" icon={faHandHoldingUsd} />
                    {/* <i class="fas fa-hand-holding-usd fa-3x"></i> */}
                        <div class="card-title"> RECHARGE REPEAT CUSTOMER </div>
                        <p><small>Save customers' cards for future phone orders</small></p>
                        <div class="learn-more">
                            <p> <small> LEARN MORE <label><i class="fas fa-angle-right"></i></label> </small> </p>
                        </div>
                    </div>
                </div>
                <div class="footer-card col-12 col-md-3">
                    <div class="card-content"> 
                    <FontAwesomeIcon className="far fa-handshake fa-3x" icon={faHandshake} />
                    
                        <div class="card-title"> ACCEPT ELECTRONIC CHECK </div>
                        <p><small>Save customers' cards for future phone orders</small></p>
                        <div class="learn-more">
                            <p> <small> LEARN MORE <label><i class="fas fa-angle-right"></i></label> </small> </p>
                        </div>
                    </div>
                </div>
                <div class="footer-card col-12 col-md-3">
                    <div class="card-content">
                    <FontAwesomeIcon className="fas fa-mobile-alt fa-3x" icon={faMobileAlt} />
                         
                        <div class="card-title"> STREAMLINE PHONE PAYMENTS </div>
                        <p><small>Save customers' cards for future phone orders</small></p>
                        <div class="learn-more">
                            <p> <small> LEARN MORE <label><i class="fas fa-angle-right"></i></label> </small> </p>
                        </div>
                    </div>
                </div>
                <div class="footer-card col-12 col-md-3">
                    <div class="card-content">
                    <FontAwesomeIcon className="fas fa-user-secret fa-3x" icon={faUserSecret} />
                         
                        <div class="card-title"> STAY<br /> SECURE </div>
                        <p><small>Save customers' cards for future phone orders</small></p>
                        <div class="learn-more">
                            <p> <small> LEARN MORE <label><i class="fas fa-angle-right"></i></label> </small> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer row m-0">
            <p> <label> <i class="fas fa-phone fa-rotate-90 text-primary"></i> </label> 800-601-0230</p>
            <div>
                <p> <small class="follow-text">FOLLOW US ON SOCIAL MEDIA</small> <label class="footer-right">
                  <FontAwesomeIcon className="fab fa-facebook-square" icon={faFacebookF} />
                  <FontAwesomeIcon className="fab fa-twitter-square" icon={faTwitterSquare} />
                  <FontAwesomeIcon className="fab fa-linkedin" icon={faLinkedin} />
                     
                      </label> </p>
            </div>
        </div>
    </div>
</div>
    );
};

export default Footer;