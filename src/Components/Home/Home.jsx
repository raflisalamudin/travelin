import { useEffect } from "react";
import "../../../css/Home.css";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="home">
        <div className="homeText">
          <span data-aos="fade-up" data-aos-duration="2000" className="spanText">
            PERUSAHAAN TRAVEL PROFESIONAL
          </span>

          <div data-aos="fade-up" data-aos-duration="4000" className="homeTitle">
            Kami Akan Memberikan <strong>Yang Terbaik</strong>
          </div>

          <div data-aos="fade-up" data-aos-duration="6000" className="btn">
            Hubungi Kami
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
