import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";

class Editspot extends Component {

  constructor() {
    super();
    this.state = {
      address: "",
      postalcode: "",
      price: "",
      type: "",
      description: "",
      contact: ""
    };
  }
  componentDidMount() {
    if (!localStorage.getItem("jwtToken")) {
      this.props.history.push("/login");
    }

    this.setState(this.props.location.state); 
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();
    const {
      address,
      postalcode,
      price,
      type,
      description,
      contact
    } = this.state;

    axios
      .put("/api/spot/"+this.state._id, {
        address,
        postalcode,
        price,
        type,
        description,
        contact
      })
      .then(result => {
        console.log(result);
        this.props.history.push("/");
      });
  };

  render() {
    
    // const d = this.state.published_date;
    // const date = d.substr(0, 10);
    
    
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h2 className="form-signin-heading">Edit Spot</h2>
          <label htmlFor="address" className="sr-only">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            name="address"
            value={this.state.address}
            onChange={this.onChange}
            required
          />
          <label htmlFor="postalcode" className="sr-only">
            Postal Code
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Postal Code"
            name="postalcode"
            value={this.state.postalcode}
            onChange={this.onChange}
            required
          />
          <label htmlFor="price" className="sr-only">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Price"
            name="price"
            value={this.state.price}
            onChange={this.onChange}
            required
          />
          <label htmlFor="type" className="sr-only">
            Type
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Type"
            name="type"
            value={this.state.type}
            onChange={this.onChange}
            required
          />
          <label htmlFor="description" className="sr-only">
            Description
          </label>
          <input
            type="description"
            className="form-control"
            placeholder="Description"
            name="description"
            value={this.state.description}
            onChange={this.onChange}
            required
          />
          <label htmlFor="contact" className="sr-only">
            Contact
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Contact"
            name="contact"
            value={this.state.contact}
            onChange={this.onChange}
            required
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Save Spot
          </button>
        </form>
      </div>
    );
  }
}

export default Editspot;
