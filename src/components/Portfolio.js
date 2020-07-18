import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBCardBody,
  MDBCardText,
} from "mdbreact";
import Carousel from "./Carousel";

export default function Portfolio() {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center shadow-lg">
            <MDBRow>
              <MDBCol size="4">
                <img
                  src="Node-Express-Handlebars.png"
                />
                <h5>Node Express Handlebars</h5>
              </MDBCol>
              <MDBCol size="4">
                <img
                  src="Node-Express-Handlebars.png"
                />
                <h5>Nosql Workout Tracker</h5>
              </MDBCol>
              <MDBCol size="4">
                <img
                  src="Node-Express-Handlebars.png"
                />
                <h5>Progressive Budget Tracker</h5>
              </MDBCol>
              <MDBCol size="4">
                <img
                  src="Node-Express-Handlebars.png"
                />
                <h5>React Employee Directory</h5>
              </MDBCol>
              <MDBCol size="4">
                <img
                  src="Node-Express-Handlebars.png"
                />
                <h5>ReeledIn</h5>
              </MDBCol>
            </MDBRow>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
