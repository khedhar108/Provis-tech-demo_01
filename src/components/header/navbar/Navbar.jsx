import { menuItems } from "../../../constants/menuData";
import { Nav, NavDropdown } from "react-bootstrap"; // Import Nav and NavDropdown from react-bootstrap
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Nav className="m-auto">
      {menuItems?.map((item) => (
        <Nav.Item key={item.id}>
          {!item.subMenu ? (
            <Nav.Link
              as={NavLink} // Change Nav.Link to NavLink
              to={item.path}
              className="text-gray-600 hover:text-gray-900"
              activeClassName="active" // Add activeClassName for active link styling
            >
              {item.title}
            </Nav.Link>
          ) : (
            <NavDropdown
              title={item.title}
              id={`nav-dropdown-${item.id}`}
              className="custom-dropdown" // Updated class for custom dropdown styling
            >
              <div className="flex flex-col justify-between md:flex-row">
                <div>
                  <h3 className="m-2 text-lg">Company</h3>
                  {item.subMenu.map((subItem) => (
                    <NavDropdown.Item
                      key={subItem.id}
                      as={NavLink} // Change NavDropdown.Item to NavLink
                      to={subItem.path}
                      className="flex items-center"
                      activeClassName="active" // Add activeClassName for active link styling
                    >
                      <div>
                        {subItem.icon && <subItem.icon className="mr-2" />}
                      </div>
                      <div className="flex flex-col">
                        <h3>{subItem.title}</h3>
                        <p className="text-sm text-gray-500 hover:text-gray-900">
                          {subItem.description}
                        </p>
                      </div>
                    </NavDropdown.Item>
                  ))}
                </div>
                <div className="flex flex-col items-center m-2 ml-5 md:m-2 news-room">
                  <h2>NewsRoom</h2>
                  <img
                    src="https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="News"
                    sizes="100px"
                    className="mt-2 border-2 border-gray-600 rounded-md"
                  />
                  <p className="w-full mt-2 text-sm text-gray-600 hover:text-gray-900">
                    News
                  </p>
                  <a
                    href="#"
                    className="text-sm text-blue-600 hover:text-blue-900"
                  >
                    Learn More
                  </a>
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
