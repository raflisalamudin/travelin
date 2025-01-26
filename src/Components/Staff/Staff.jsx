import { useEffect } from "react";
import "../../../css/Staff.css";

// Import Image
import user4 from "../Assets/user4.jpg";
import user5 from "../Assets/user5.jpg";
import user6 from "../Assets/user6.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Staff = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="staff container section">
      <div className="secContainer">
        <span className="secTitle">Tim Kami</span>

        <div className="staffContainer grid">
          <div data-aos="fade-up" data-aos-duration="2000" className="singleStaff">
            <div className="imgDiv">
              <img src={user4} />
            </div>
            <span className="name">Ilham Kurniawan</span>
            <span className="jobTitle">CEO</span>
            <span className="contact">ilhamkurniawan@gmail.com</span>
          </div>

          <div data-aos="fade-up" data-aos-duration="2000" className="singleStaff">
            <div className="imgDiv">
              <img src={user5} />
            </div>
            <span className="name">Ayu Wulandari</span>
            <span className="jobTitle"> Finance dan Administrasi</span>
            <span className="contact">ayuwulandari@gmail.com</span>
          </div>

          <div data-aos="fade-up" data-aos-duration="2000" className="singleStaff">
            <div className="imgDiv">
              <img src={user6} />
            </div>
            <span className="name">Japar Ferdiansyah</span>
            <span className="jobTitle">Marketing dan Business Development</span>
            <span className="contact">ilhamkurniawan@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
