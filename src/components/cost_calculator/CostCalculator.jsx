import { CiLocationOn } from "react-icons/ci";
import { GiWeight } from "react-icons/gi";

const parameters = [
  {
    id: 1,
    Legend: "Origin",
    Label: "Enter Location",
    placeholder: "Enter Location",
    icon: <CiLocationOn />,
  },
  {
    id: 2,
    Legend: "Destination",
    Label: "Enter Destination",
    placeholder: "Enter Destination",
    icon: <CiLocationOn />,
  },
  {
    id: 3,
    Legend: "Weight",
    Label: "Weight In KG",
    placeholder: "Weight In KG",
    icon: <GiWeight />,
  },
];
//! https://github.com/twbs/bootstrap/issues/32548 -fiedset and legend issue with bootstrap 5
function CostCalculator() {
  return (
    <form className="container d-flex flex-column flex-md-row justify-content-around gap-4 mt-4 shadow-lg p-3  rounded-4">
      {parameters.map((param) => (
        <fieldset key={param.id} className="border rounded-3 p-1">
          <legend className="float-none w-auto px-3">{param.Legend}</legend>
          {/* <label className="form-label" htmlFor={param.Legend} /> */}
          <div className="input-group">
            <span className="input-group-text  border-light">{param.icon}</span>
            <input
              type="text"
              className="form-control  border-light"
              id={param.Legend}
              placeholder={param.placeholder}
            />
          </div>
        </fieldset>
      ))}

      <button type="submit" className="btn btn-primary w-25   text-lg-center ">
        Check Price
      </button>
    </form>
  );
}

export default CostCalculator;
