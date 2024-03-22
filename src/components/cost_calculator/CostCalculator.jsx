import { parameters } from "../../constants/parameters";
//! https://github.com/twbs/bootstrap/issues/32548 -fiedset and legend issue with bootstrap 5
function CostCalculator() {
  return (
    <form className="container d-flex flex-column flex-md-row justify-content-around gap-4 mt-4 shadow-lg p-3  rounded-4">
      {parameters.map((param) => (
        <fieldset key={param.id} className="border rounded-3 p-1">
          <legend className="float-none w-auto px-3 text-secondary fw-semibold fs-6 ">
            {param.Legend}
          </legend>
          {/* <label className="form-label" htmlFor={param.Legend} /> */}
          <div className="input-group pb-2">
            <span className="input-group-text bg-white border-light border-0">{<param.icon/>}</span>
            <input
              type="text"
              className="form-control   text  border-0 "
              id={param.Legend}
              placeholder={param.placeholder}
            />
          </div>
        </fieldset>
      ))}

      <button type="submit" className="btn customBtn w-25   text-lg-center ">
        Check Price
      </button>
    </form>
  );
}

export default CostCalculator;
