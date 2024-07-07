import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../main';
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);

  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>
        &copy; All Rights are Reserved
      </div>
      <div>
        <Link to={""}><FaFacebookF style={{ color: '#2d5649' }} /></Link>
        <Link to={""}><FaYoutube style={{ color: '#2d5649' }} /></Link>
        <Link to={""}><FaLinkedin style={{ color: '#2d5649' }} /></Link>
        <Link to={""}><RiInstagramFill style={{ color: '#2d5649' }} /></Link>
      </div>
    </footer>
  );
};

export default Footer;
