import { IoMdVideocam } from "react-icons/io";
import { VideoPopup } from "./VideoPopup";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiAirplaneDeparture } from "react-icons/gi";

function HeroLayout() {
  return (
    <div className=" mt-20 animate__animated animate__fadeIn">
      <div className="container-fluid">
        <div className="row align-items-center ">
          <div className="col-md-12 ">
            <div className=" m-5 animate__animated animate__zoomIn position-relative z-1">
              {/* <CircleEffect /> */}
              <div className="row g-0 h-100 ">
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <div className="card-body rounded-circle rounded-end-0 ">
                    <div className="d-flex flex-column h-100 justify-content-center position-relative">
                      {/* truck svg */}
                      <CiDeliveryTruck className="truck d-none d-lg-block " />
                      <GiAirplaneDeparture className="plane d-none d-lg-block  " />

                      <h5 className="card-title display-5 fw-semibold animate__animated animate__fadeInLeft ">
                        Quick & reliable{" "}
                        <span className="text-danger fw-bold display-4 ">
                          Warehousing and Logistic
                        </span>{" "}
                        solutions
                      </h5>
                      <p className="card-text animate__animated animate__fadeInRight">
                        Our team of experts will help you to manage your
                        inventory and deliver your products to your customers on
                        time.
                      </p>
                      <div className="d-flex gap-4 mx-3 mt-4 mb-1 container ">
                        <button className="btn customBtn  animate__animated animate__fadeInUp">
                          Join Now
                        </button>
                        <button className=" d-flex btn align-items-center gap-2  animate__animated animate__fadeInDown">
                          <div className=" border rounded-circle d-flex align-items-center justify-content-center p-2  shadow ">
                            <IoMdVideocam />
                          </div>
                          {/* PopUp Video activating by this button */}
                          <VideoPopup />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <img
                    src={"/heroimg.png"}
                    alt="hero image"
                    className="img-fluid animate__animated animate__zoomIn"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroLayout;
