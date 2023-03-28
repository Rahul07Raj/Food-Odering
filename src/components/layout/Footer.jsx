import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>B.Tech Burger Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @btechburgerwala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>
      <div>

        <Link to="https://www.youtube.com/channel/UCebNFQX6fcQoYdllo6cVShQ">
          <AiFillYoutube />
        </Link>
        <Link to="https://instagram.com/rahul_rajput_607">
          <AiFillInstagram />
        </Link>
        <Link to="https://github.com/Rahul07Raj">
          <AiFillGithub />
        </Link>
      </div>
      </aside>
    </footer>
  );
};

export default Footer;