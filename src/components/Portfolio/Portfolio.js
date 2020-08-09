import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";
import "./Portfolio.css";
import { MDBAnimation } from "mdbreact";

export default function Portfolio() {
  return (
    <MDBContainer className="mt-3 text-center appContainer">
      {/* <MDBJumbotron className="text-center shadow-lg"> */}
      <MDBRow>
        <MDBAnimation reveal type="fadeInUp">
          <MDBCol>
            <MDBCard className="card shadow-lg">
              <MDBCardImage
                className="img-fluid mt-4"
                src={require("../../imgs/Node-Express-Handlebars.png")}
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>Node Express Handlebars</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn
                  href="https://git.heroku.com/leonardmk1-express-handlebars.git"
                  gradient="aqua"
                >
                  More Info
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInUp">
          <MDBCol>
            <MDBCard className="card shadow-lg">
              <MDBCardImage
                className="img-fluid mt-4"
                src={require("../../imgs/Nosql-Workout-Tracker.png")}
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>Nosql Workout Tracker</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn
                  href="https://calm-castle-90248.herokuapp.com/"
                  gradient="aqua"
                >
                  More Info
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInUp">
          <MDBCol>
            <MDBCard className="card shadow-lg">
              <MDBCardImage
                className="img-fluid mt-4"
                src={require("../../imgs/Progressive-Budget.png")}
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>Progressive Budget Tracker</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn
                  href="https://salty-refuge-43937.herokuapp.com/"
                  gradient="aqua"
                >
                  More Info
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBAnimation>
        <MDBAnimation reveal type="bounceInUp">
          <MDBCol>
            <MDBCard className="card shadow-lg">
              <MDBCardImage
                className="img-fluid mt-4"
                src={require("../../imgs/React Employee Directory.png")}
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>React Employee Directory</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn
                  href="https://leonardmk1.github.io/React-Employee-Directory-The-Office/"
                  gradient="aqua"
                >
                  More Info
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBAnimation>
        <MDBAnimation reveal type="bounceInUp">
          <MDBCol>
            <MDBCard className="card shadow-lg">
              <MDBCardImage
                className="img-fluid mt-4"
                src={require("../../imgs/ReeledIn.png")}
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>ReeledIn</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn href="https://reeledin.herokuapp.com/" gradient="aqua">
                  More Info
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBAnimation>
        <MDBAnimation reveal type="bounceInUp">
          <MDBCol>
            <MDBCard className="card shadow-lg">
              <MDBCardImage
                className="img-fluid mt-4"
                src={require("../../imgs/Work Day Scheduler .png")}
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>Work Day Scheduler</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn href="https://reeledin.herokuapp.com/" gradient="aqua">
                  More Info
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBAnimation>
      </MDBRow>
    </MDBContainer>
  );
}
