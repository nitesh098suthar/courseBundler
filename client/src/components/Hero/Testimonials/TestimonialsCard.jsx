import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonials } from "./testimonials.js";

const TestimonialsCard = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 500, // when the screen size is 430px or less
        settings: {
          slidesToShow: 1, // show only 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="TestimonialsShadow xs:overflow-hidden">
      <Slider {...settings}>
        {testimonials.map((item, i) => (
          <div key={i} className="bg-cardColor p-6 min-h-[450px] rounded-lg ">
            <div className="grid place-items-center">
              <div className="w-[100px] rounded-full overflow-hidden h-[100px]">
                <img src={item.userImage} alt="" className=" h-[100%]" />
              </div>
            </div>
            <div>
              <h1 className="text-white text-center text-2xl font-bold mt-4">
                {item.userName}
              </h1>
              <div className="flex justify-center  py-3">
                <p className="text-yellowColor text-center">{item.position}</p>
                <p className="text-white text-center px-2">at</p>
                <p className="text-yellowColor text-center">{item.company}</p>
              </div>
              <p className="text-white text-center">{item.feedback}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsCard;
