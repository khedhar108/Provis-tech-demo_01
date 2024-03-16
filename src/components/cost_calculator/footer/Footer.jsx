import { RiFacebookCircleFill } from "react-icons/ri";
import { FaGooglePlus } from "react-icons/fa";


function Footer() {
  const links = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Our WareHouses",
      href: "/warehouses",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "News and Media",
      href: "/news",
    },
  ];

  const legalLinks = [
    {
      title: "Teams",
      href: "/teams",
    },
    {
      title: "Privacy",
      href: "/privacy",
    },
  ];

  return (
    <footer className="py-4 mt-8 bg-blue-800 container-fluid text-light">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <h5 className="mb-2 text-center display-5 text-md-start">
            Ship<span className="text-danger">Up</span>
          </h5>
          <p>
            ShipUp delivers an unparalled customer service through dedicated
            customer team.
          </p>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <h5 className="mb-2 text-center display-5 text-md-start">Explore</h5>
          {links.map((link) => (
            <p key={link.href}>
              <a href={link.href}>{link.title}</a>
            </p>
          ))}
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <h5 className="mb-2 text-center display-5 text-md-start">Legal</h5>
          {legalLinks.map((link) => (
            <p key={link.href}>
              <a href={link.href}>{link.title}</a>
            </p>
          ))}
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <h5 className="mb-2 text-center display-5 text-md-start">
            Social Media
          </h5>
          <div className="flex-row gap-4 d-flex social-media-links">
            <div className="w-4 h-4 social-media-link">
              <a href="#">
                <span className="social-media-icon">
                  <RiFacebookCircleFill />
                </span>
              </a>
            </div>
            <div className="w-4 h-4 social-media-link">
              <a href="#">
                <span className="social-media-icon">
                  <FaGooglePlus />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4" />

      <div className="my-1 text-center">
        Ship <span className="text-danger">Up</span>
      </div>
    </footer>
  );
}

export default Footer;
