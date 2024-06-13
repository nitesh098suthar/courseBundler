import { Link } from "react-router-dom";
import logo from "/images/logo.png"
const Footer = () => {
  return (
    <>
      <div className="h-[250px] bg-darkColor w-full">
        <div className="flex items-center justify-evenly h-[200px] flex-wrap">
          <div className="w-[250px]">
            <img src={logo} alt="" />
          </div>
          <nav className="text-white flex">
            <Link to={"/privacy-policy"}>
              <p className="mx-4 text-dullWhite text-sm">Privacy Policy</p>
            </Link>
            <Link to={"/refund-policy"}>
              <p className="mx-4 text-dullWhite text-sm">Refund Policy</p>
            </Link>
            <Link to={"/terms-of-service"}>
              <p className="mx-4 text-dullWhite text-sm">Terms of Service</p>
            </Link>
            <Link to={"/contact-us"}>
              <p className="mx-4 text-dullWhite text-sm">Contact Us</p>
            </Link>
          </nav>
          <nav className="flex items-center">
            <Link to={"/privacypolicy"}>
              <img
                src="images/footer/twitter.png"
                alt=""
                width={40}
                className="mx-1 blackToWhite"
              />
            </Link>
            <Link to={"/privacypolicy"}>
              <img
                src="images/footer/linkedIn.png"
                alt=""
                width={40}
                className="mx-1 blackToWhite "
              />
            </Link>
            <Link to={"/privacypolicy"}>
              <img
                src="images/footer/instagram.png"
                alt=""
                width={40}
                className="mx-1 "
              />
            </Link>
            <Link to={"/privacypolicy"}>
              <img
                src="images/footer/youtubej.png"
                alt=""
                width={40}
                className="mx-1 blackToWhite "
              />
            </Link>
            <Link to={"/privacypolicy"}>
              <img
                src="images/footer/fb.png"
                alt=""
                width={40}
                className="mx-1 blackToWhite "
              />
            </Link>
            <Link to={"/privacypolicy"}>
              <img
                src="images/footer/discord.png"
                alt=""
                width={40}
                className="mx-1 blackToWhite "
              />
            </Link>
          </nav>
        </div>
        <div className="grid place-content-center">
          <p className="text-dullWhite pb-3">
            Made with{" "}
            <span>
              <img
                src="images/footer/loveRed.png"
                alt=""
                className="inline-block w-7"
              />
            </span>{" "}
            in INDIA
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
