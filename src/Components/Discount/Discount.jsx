import { useEffect } from "react";
import "../../../css/Discount.css";

// Import Video
import video from "../Assets/video.mp4";

import Aos from "aos";
import "aos/dist/aos.css";

const Discount = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="discount section">
      <div className="secContainer">
        <video src={video} autoPlay loop muted />
        <div className="textDiv">
          <span data-aos="fade-up" data-aos-duration="2000" className="title">
            Daftar sekarang dan dapatkan diskon 30%
          </span>
          <p data-aos="fade-up" data-aos-duration="2500">
            Ingin mendapatkan diskon untuk perjalanan Anda berikutnya ke destinasi favorit Anda.
          </p>

          <div data-aos="fade-up" data-aos-duration="3000" className="input_btn flex">
            <input type="text" placeholder="Masukan Email Anda" />
            <button className="btn">Berlangganan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
