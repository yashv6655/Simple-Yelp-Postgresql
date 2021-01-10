import React from "react";

interface AddRestaurantProps {}

const AddRestaurant: React.FC<AddRestaurantProps> = () => {
  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="name" />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col">
            <select className="custom-select my-1 mr-sm-2">
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button type="submit" className="btn btn-warning">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
