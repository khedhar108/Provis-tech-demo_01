import {
  links,
  legalLinks,
  socialMediaLinks,
} from "../../constants/footerData";
function Footer() {
  return (
    <footer className="text-white mt-5 container-fluid mb-0 position-absolute bg-footer">
      <div className="row  justify-content-around m-4">
        <div className="col-12 col-md-6 col-lg-3">
          <h5 className="mb-2  display-6 text-md-start text-danger">
            Ship<span className=" fw-semibold text-white">Up</span>
          </h5>
          <p>
            ShipUp delivers an unparalled customer service through dedicated
            customer team.
          </p>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <h5 className="  display-6 text-md-start">Explore</h5>
          {links.map((link) => (
            <p key={link.href}>
              <a href={link.href} className="text-white text-decoration-none ">
                {link.title}
              </a>
            </p>
          ))}
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <h5 className="  display-6 text-md-start">Legal</h5>
          {legalLinks.map((link) => (
            <p key={link.href}>
              <a href={link.href} className="text-white text-decoration-none ">
                {link.title}
              </a>
            </p>
          ))}
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <h5 className="mb-2  display-6 text-md-start">Social Media</h5>
          <div className="flex-row gap-4 d-flex social-media-links">
            {socialMediaLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="social-media-link bg-white rounded-circle  p-2 d-flex align-content-center justify-content-center"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <hr className="mt-2" />
      </div>

      <div className="mb-2 text-center">
        Ship<span className="text-danger fw-medium ">Up</span>.ng
      </div>
    </footer>
  );
}

export default Footer;
