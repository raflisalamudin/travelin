import { useEffect } from "react";
import "../../../css/Footer.css";

// Import Icon
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer">
      <div className="secContainer">
        <div className="content grid">
          <div data-aos="fade-up" data-aos-duration="2000" className="row">
            <div className="spanText">KONTAK KAMI</div>
            <div className="contactDiv">
              <span className="flex">
                <HiPhone className="icon" />
                <span>+62 815 8455 2854</span>
              </span>
              <span className="flex">
                <MdEmail className="icon" />
                <span>travelin@gmail.com</span>
              </span>
              <span className="flex">
                <FaLocationArrow className="icon" />
                <span>Indonesia, Jakarta</span>
              </span>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="2000" className="row">
            <div className="spanText">BERITA TERKINI</div>
            <div className="singleNews">
              <span className="text">Panduan pribadi Anda ke tempat yang paling banyak dikunjungi di Indonesia.</span>
              <p>19 Oktober 2023</p>
            </div>
            <div className="singleNews">
              <span className="text">Panduan pribadi Anda ke tempat yang paling banyak dikunjungi di Pulau Jawa.</span>
              <p>19 Oktober 2023</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="2000" className="row">
            <div className="spanText">LINK LAINNYA</div>
            <div className="footerLinks">
              <ul>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Gallery</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bottomDiv flex">
          <p>Copyright 2023 TravelIn - All rights reserved</p>

          <div className="social flex">
            <FaFacebookF className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiFillYoutube className="icon" />
            <AiFillInstagram className="icon" />
          </div>

          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
