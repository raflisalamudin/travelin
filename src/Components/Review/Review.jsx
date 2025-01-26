import { useEffect } from "react";
import "../../../css/Review.css";

// Import Image
import user1 from "../Assets/user1.jpg";
import user2 from "../Assets/user2.jpg";
import user3 from "../Assets/user3.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Review = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="review section">
      <div className="secContainer">
        <span className="secTitle">Apa Kata Mereka</span>

        <div className="reviewContainer container grid">
          <div data-aos="fade-up" data-aos-duration="3000" className="singleReview">
            <div className="imgDiv">
              <img src={user1} />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi fuga, nobis aspernatur neque similique perspiciatis mollitia dignissimos repellendus reprehenderit?</p>
            <div className="name">Windah Bocil</div>
          </div>

          <div data-aos="fade-up" data-aos-duration="3500" className="singleReview">
            <div className="imgDiv">
              <img src={user2} />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eos corporis excepturi deleniti magnam officiis veniam recusandae maiores iusto sit delectus, dolores expedita molestias cum?</p>
            <div className="name">Bocil Kematian</div>
          </div>

          <div data-aos="fade-up" data-aos-duration="4000" className="singleReview">
            <div className="imgDiv">
              <img src={user3} />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta illo non repellendus, ut quisquam, consectetur, aperiam accusantium mollitia ab a porro quae quia. Hic illo eum esse magni, quibusdam libero.</p>
            <div className="name">Bocil Windah</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
