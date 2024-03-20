import { useEffect, useState } from "react";
import { menuItems } from "../../constants/menuData";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="d-flex justify-content-center justify-content-md-around container-fluid">
      <nav className="navbar navbar-expand-lg bg-white d-flex  bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Ship<span className="text-danger fw-bold ">Up</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-md-5 mb-2 mb-lg-0">
              {/*conditional Rendering */}
              {menuItems?.map((item) => (
                <li key={item.id} className="nav-item">
                  {!item.subMenu ? (
                    <NavLink
                      className="nav-link"
                      to={item.path}
                      activeClassName="active"
                    >
                      {item.title}
                    </NavLink>
                  ) : (
                    <div className="dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {item.title}
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <div className="d-flex">
                          <div className="dropdown-left">
                            <li>
                              <h4 className=" px-3 fw-bold">Company</h4>
                            </li>
                            {item.subMenu.map((subItem) => (
                              <li key={subItem.id}>
                                <NavLink
                                  className="dropdown-item"
                                  to={subItem.path}
                                >
                                  {/* changing dropdown layout according width */}
                                  {windowWidth > 482 ? (
                                    <div className="d-flex align-items-center">
                                      <div className="border rounded-circle d-flex align-items-center justify-content-center p-1 text-danger">
                                        {subItem.icon && <subItem.icon />}
                                      </div>
                                      <div className="ms-4">
                                        <h5>{subItem.title}</h5>
                                        <p>{subItem.description}</p>
                                      </div>
                                    </div>
                                  ) : (
                                    <div>{subItem.title}</div>
                                  )}
                                </NavLink>
                              </li>
                            ))}
                          </div>
                          <div className="dropdown-right d-none d-md-flex  flex-column gap-2  w-sm-100 container ">
                            <h2>NewsRoom</h2>
                            <div className="mt-4">
                              <img
                                src="https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="News"
                                className=" rounded-2 h-50  w-75 "
                              />
                              <p>News</p>
                              <a href="#" className="text-danger">
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="gap-2 ms-md-5 d-flex me-5 ">
              <button className="btn btn-outline-dark ">Request Quote</button>
              <button className="btn customBtn ">Join Now</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
