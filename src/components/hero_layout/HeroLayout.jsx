import { LuVideo } from "react-icons/lu";
import { VideoPopup } from "./VideoPopup";


function HeroLayout() {
  return (
    <div className=" mt-20 animate__animated animate__fadeIn">
      <div className="container-fluid">
        <div className="row align-items-center ">
          <div className="col-md-12 ">
            <div className="card animate__animated animate__zoomIn">
              <div className="row g-0 h-100">
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <div className="card-body">
                    <div className="d-flex flex-column h-100 justify-content-center">
                      <h5 className="card-title display-4 animate__animated animate__fadeInLeft">
                        Quick & reliable{" "}
                        <span className="text-danger">
                          WareHousing and Logistic
                        </span>{" "}
                        solutions
                      </h5>
                      <p className="card-text animate__animated animate__fadeInRight">
                        Our team of experts will help you to manage your
                        inventory and deliver your products to your customers on
                        time.
                      </p>
                      <div className="d-flex gap-4 mx-3 mt-4 mb-1">
                        <button className="btn btn-primary animate__animated animate__fadeInUp">
                          Join Now
                        </button>
                        <button className=" d-flex btn btn-outline-light align-items-center gap-2  animate__animated animate__fadeInDown">
                          <div className=" border rounded-circle d-flex align-items-center justify-content-center p-2 bg-body-tertiary text-primary">
                            <LuVideo />
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
