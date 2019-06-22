import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import PropTypes from 'prop-types';

import NewsInput from './NewsInput';
import SubFooter from './SubFooter';
import './footer.scss';


const Footer = ({ color }) => (
  <div id={`footer${color}`}>
    <p className="footer-newsletter-title">s'abonner à la newsletter</p>
    <NewsInput color={color} />
    <p className="footer-social-title">nous suivre :</p>
    <div className="footer-social">
      <FaFacebookF className="social-icon" />
      <FaTwitter className="social-icon" />
      <FaInstagram className="social-icon" />
      <FaYoutube className="social-icon" />
    </div>
    <SubFooter color={color} />
  </div>
);

Footer.propTypes = {
  color: PropTypes.string.isRequired,
};


export default Footer;
