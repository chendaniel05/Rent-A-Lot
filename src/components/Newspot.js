import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";

class Newspot extends Component {
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
   if(!localStorage.getItem("jwtToken")) {
    this.props.history.push("/login");
   }
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();
    const { address, postalcode, price, type, description, contact } = this.state;

    axios.post("/api/spot/", { address, postalcode, price, type, description, contact }).then(result => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h2 className="form-signin-heading">New Spot</h2>
          <label htmlFor="address" className="sr-only">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="ADDRESS"
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
            type="text"
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
          <button className="btn btn-lg btn-primary btn-block" type="submit">Add Spot</button>
        </form>
      </div>
    );
  }
}

export default Newspot;
