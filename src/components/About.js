import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
} from "mdbreact";

const AboutPage = () => {
  return (
    <>
      <MDBContainer className="mt-5 text-center appContainer">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron className="text-center shadow-lg">
              <MDBCardTitle className="card-title h4 pb-2">
                <h1
                  style={{ fontFamily: "League Spartan", fontWeight: "bolder" }}
                >
                  About Me
                </h1>
                <hr></hr>
              </MDBCardTitle>
              <MDBCardImage src={require("../imgs/Matt.jpg")} style={{width: "300px", borderRadius:"100%", marginLeft:"auto", marginRight:"auto"}} alt="me" className="img-fluid" />
              <MDBCardBody>
                <MDBCardText>
                  <p className=" h5 display-5">
                    I am an aspiring full-stack web developer, and a front end
                    enthusiast! I have experience in HTML, CSS, JavaScript,
                    Node.js, MySQL, Sequelize, Mongo, and now Mongoose Mongo DB.
                    I am currently working on improving my Javascript skills
                    with the hope that if I leavern Javascipt proficently,
                    another language will come more easily. This entire website
                    is built with MDBReact.
                  </p>
                  <p className=" h5 display-5">
                    I have been searching for the career that can withstand my
                    constant need for mental stimulation and I believe that I
                    have found a field that will always challenge me and fulfill
                    that side me. I am constainly curious and am also looking to
                    larn and improve my understanding no matter the topic.
                  </p>
                  <p className=" h5 display-5">
                    I am married with two dogs and I live in Richmond, VA. I
                    love hiking and long walks around the neighborhood. I am a
                    passionate outdoorsman and foodie.
                  </p>
                </MDBCardText>
              </MDBCardBody>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default AboutPage;
