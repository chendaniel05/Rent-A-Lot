import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import axios from "axios";

class Spot extends Component {
  onDelete = () => {
    var result = window.confirm("Are you sure you want to delete?");
    if (result) {
      console.log("deleted");
      axios
        .delete("/api/spot/" + this.props.location.state._id)
        .then(result => {
          console.log(result);
          this.props.history.push("/");
        });
    }
  };

  render() {
    // const date = new Date(this.props.location.state.published_date);
    return (
      <div className="container">
        <div class="jumbotron">
          <h2 class="display-5">{this.props.location.state.address}</h2>
          <p class="lead">
            <strong>
              <em>Address: </em>
            </strong>&nbsp;{this.props.location.state.address}
            <hr />
          </p>
          <p class="lead">
          <strong>
            <em>Postal Code (if applicable): </em>
          </strong>&nbsp;{this.props.location.state.postalcode}
          <hr />
          </p>
          <p class="lead">
          <strong>
            <em>Price: </em>
          </strong>&nbsp;{this.props.location.state.price}
          <hr />
          </p>
          <p class="lead">
          <strong>
            <em>Type: </em>
          </strong>&nbsp;{this.props.location.state.type}
          <hr />
          </p>
          <p class="lead">
          <strong>
            <em>Description: </em>
          </strong>&nbsp;{this.props.location.state.description}
          <hr />
          </p>
          <p class="lead">
          <strong>
            <em>Contact: </em>
          </strong>&nbsp;{this.props.location.state.contact}
          <hr />
          </p>
        {/* <p class="lead">
            <strong>
              <em>Published Date: </em>
            </strong>&nbsp;{date.toDateString()}
            <hr />
          </p> */}
        <Link
          className="btn btn-warning"
          to={{
            pathname: `/edit/${this.props.location.state._id}`,
            state: this.props.location.state
          }}
        >
          Edit
          </Link>&nbsp;&nbsp;
          <button onClick={this.onDelete} className="btn btn-danger">Delete</button>
      </div>
      </div >
    );
  }
}

export default Spot;
