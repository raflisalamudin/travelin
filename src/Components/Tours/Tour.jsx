import { useEffect } from "react";
import "../../../css/Tour.css";

// Import Image
import tourImage1 from "../Assets/image1.jpg";
import tourImage2 from "../Assets/image2.jpg";

// Import Icon
import { AiFillStar } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";

const Tour = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="tours container section">
      <div className="secContainer">
        <span className="secTitle">Travel Paling Diminati</span>

        <div className="tourContainer">
          <div data-aos="fade-up" data-aos-duration="2000" className="singleTour grid">
            <div className="imgDiv">
              <img src={tourImage1} />
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className="tourInfo">
              <span className="tourTitle">Jawa Tengah, Indonesia</span>
              <div className="stars_review flex">
                <div className="stars">
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                </div>

                <small className="custReview">10 Customer Review</small>
              </div>

              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, amet doloremque voluptate obcaecati, tempora, molestias non velit eveniet ab quas maiores tempore qui sint adipisci.</p>
              <button className="btn">Beli Perjalanan Ini</button>
            </div>

            <span className="price">Rp. 500.000,-</span>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" className="singleTour grid">
            <div className="imgDiv">
              <img src={tourImage2} />
            </div>
            <div data-aos="fade-up" data-aos-duration="3500" className="tourInfo">
              <span className="tourTitle">Jawa Timur, Indonesia</span>
              <div className="stars_review flex">
                <div className="stars">
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                </div>

                <small className="custReview">5 Customer Review</small>
              </div>

              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, amet doloremque voluptate obcaecati, tempora, molestias non velit eveniet ab quas maiores tempore qui sint adipisci.</p>
              <button className="btn">Beli Perjalanan Ini</button>
            </div>

            <span className="price">Rp. 750.000,-</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
