import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCardTitle,
  MDBCardBody,
  MDBCardText,
} from "mdbreact";
import Carousel from "./Carousel";
import Projects from "../Projects/"

export default function Portfolio() {
  return (
    <>
      <MDBContainer className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron className="text-center">
              <MDBCardTitle className="card-title h4 pb-2">
                <h1
                  style={{ fontFamily: "League Spartan", fontWeight: "bolder" }}
                >
                  Portfolio
                </h1>
              </MDBCardTitle>

              <Carousel/>
              <MDBCardBody>
                <MDBCardText>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </MDBCardText>

                <MDBCol className="d-flex justify-content-center mt-4" md="12">
                  <MDBCol md="3" className="d-flex justify-content-around">
                    <a href="#">
                      <MDBIcon
                        fab
                        icon="linkedin-in"
                        className="grey-text"
                        size="lg"
                      />
                    </a>
                    <a href="#">
                      <MDBIcon
                        fab
                        icon="twitter"
                        className="grey-text"
                        size="lg"
                      />
                    </a>
                    <a href="#">
                      <MDBIcon
                        fab
                        icon="facebook-f"
                        className="grey-text"
                        size="lg"
                      />
                    </a>
                  </MDBCol>
                </MDBCol>
              </MDBCardBody>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
