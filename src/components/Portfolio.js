import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default function Portfolio() {
  return (
    <MDBContainer className="mt-5 text-center appContainer">
          <MDBJumbotron className="text-center shadow-lg">
            <MDBRow>
              <MDBCol size="4" className="m-1">
                <img
                  href="https://git.heroku.com/leonardmk1-express-handlebars.git"
                  src={require("../imgs/Node-Express-Handlebars.png")}
                  alt="Burger"
                  style={{width:"300px", maxHeight:"auto", margin:"auto"}}
                
                />
                <h5 className="text-center">Node Express Handlebars</h5>
              </MDBCol>
              <MDBCol size="4" className="m-1">
                <img
                  href="https://calm-castle-90248.herokuapp.com/"
                  src={require("../imgs/Nosql-Workout-Tracker.png")}
                  alt="Workout"
                  style={{width:"300px", maxHeight:"auto", margin:"auto"}}
                />
                <h5>Nosql Workout Tracker</h5>
              </MDBCol>
              <MDBCol size="4" className="mt-4 my-4 ">
                <img
                  href="https://salty-refuge-43937.herokuapp.com/"
                  src={require("../imgs/Progressive-Budget.png")}
                  alt="Budget"
                  style={{width:"300px",maxHeight:"auto", margin:"auto"}}
                />
                <h5>Progressive Budget Tracker</h5>
              </MDBCol>
              {/* </MDBRow>
              <MDBRow> */}
              <MDBCol size="4" className="m-1 my-4 ">
                <img href="https://leonardmk1.github.io/React-Employee-Directory-The-Office/"
                src={require("../imgs/React Employee Directory.png")} alt="The Office" style={{width:"300px", maxHeight:"auto", margin:"auto"}}/>
                <h5>React Employee Directory</h5>
              </MDBCol>
              <MDBCol size="4" className="m-1 my-4 ">
                <img href="https://reeledin.herokuapp.com/" src={require("../imgs/ReeledIn.png")} alt="Project 2" style={{width:"300px", maxHeight:"auto", margin:"auto"}}/>
                <h5>ReeledIn</h5>
              </MDBCol>
              <MDBCol size="4" className="m-1 my-4 ">
                <img src={require("../imgs/Work Day Scheduler .png")} alt="Scheduler" style={{width:"300px", maxHeight:"auto", margin:"auto"}}/>
                <h5>Work Day Scheduler</h5>
              </MDBCol>
            </MDBRow>
          </MDBJumbotron>
    </MDBContainer>
  );
}
