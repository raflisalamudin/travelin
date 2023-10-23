import { useEffect } from "react";
import "../../../css/Cards.css";

// Import Images
import cardImage1 from "../Assets/cardImage1.jpg";
import cardImage2 from "../Assets/cardImage2.jpg";
import cardImage3 from "../Assets/cardImage3.jpg";

// Import Icon
import { AiOutlineSwapRight } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";

const Cards = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="cards">
      <div data-aos="fade-up" data-aos-duration="2000" className="cardContainer container grid">
        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage1} />
          </div>
          <h4 className="textDiv">Wisata Sejarah</h4>
        </div>
        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage2} />
          </div>
          <h4 className="textDiv">Wisata Gunung</h4>
        </div>
        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage3} />
          </div>
          <h4 className="textDiv">Wisata Pantai</h4>
        </div>
      </div>

      <div className="spanText flex">
        Travel Lainnya <AiOutlineSwapRight />
      </div>
    </div>
  );
};

export default Cards;
