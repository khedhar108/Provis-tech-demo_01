import { menuItems } from "../../../constants/menuData";
import { NavLink } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";

function Navbar() {
  return (
    <Nav >
      {menuItems?.map((item) => (
        <Nav.Item key={item.id}>
          {!item.subMenu ? (
            <Nav.Link
              as={NavLink}
              to={item.path}
              className="text-red-600 "
              activeClassName="active"
            >
              {item.title}
            </Nav.Link>
          ) : (
            <NavDropdown title={item.title} id={`nav-dropdown-${item.id}`}
            >
              <div className=" d-flex flex-column flex-md-row bg-danger-subtle  dropdown-class ">
                <div className="d-flex flex-column gap-2 container-fluid ">
                  <h3>Company</h3>
                  {item.subMenu.map((subItem) => (
                    <NavDropdown.Item
                      key={subItem.id}
                      as={NavLink}
                      to={subItem.path}
                      className="d-flex  align-items-center  "
                    >
                      <div className="border rounded-circle d-flex align-items-center justify-content-center p-1 text-danger ">
                        {subItem.icon && <subItem.icon />}
                      </div>
                      <div className="ms-4">
                        <h5>{subItem.title}</h5>
                        <p>{subItem.description}</p>
                      </div>
                    </NavDropdown.Item>
                  ))}
                </div>
                <div className="  flex-column gap-2  container-fluid  w-sm-100">
                  <h2>NewsRoom</h2>
                  <img
                    src="https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="News"
                    className="img-fluid rounded-2 "
                  />
                  <p>News</p>
                  <a href="#">Learn More</a>
                </div>
              </div>
            </NavDropdown>
          )}
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default Navbar;
