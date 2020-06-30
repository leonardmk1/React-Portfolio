import React from 'react'
import {
    MDBJumbotron,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBCardTitle,
    MDBCardImage,
    MDBCardBody,
    MDBCardText,
  } from "mdbreact";
  
export default function Contact() {
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
                    PortFolio
                  </h1>
                </MDBCardTitle>
  
                <MDBCardImage
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                  className="img-fluid"
                />
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
    )
}
