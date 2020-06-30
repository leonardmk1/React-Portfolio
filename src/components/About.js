import React from "react";
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
  MDBNavLink
} from "mdbreact";


const AboutPage = () => {
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
                  About Me
                </h1>
              </MDBCardTitle>

              <MDBCardImage
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                className="img-fluid"
              />
              <MDBCardBody>
                <MDBCardTitle className="indigo-text h5 m-4">
                  Photography
                </MDBCardTitle>
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
};

export default AboutPage;

// <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
//             <MDBMask
//               overlay="purple-light"
//               className="flex-center flex-column text-white text-center"
//             >
//               <h2>This Navbar is fixed</h2>
//               <h5>
//                 It will always stay visible on the top, even when you scroll
//                 down
//               </h5>
//               <p>
//                 Navbar's background will switch from transparent to solid color
//                 while scrolling down
//               </p>
//               <br />
//               <p>
//                 Full page intro with background image will be always displayed
//                 in full screen mode, regardless of device{" "}
//               </p>
//             </MDBMask>
//           </MDBView>

//         <main>
//           <MDBContainer className="text-center my-5">
//             <p align="justify">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//               reprehenderit in voluptate velit esse cillum dolore eu fugiat
//               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//               sunt in culpa qui officia deserunt mollit anim id est laborum.
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//               reprehenderit in voluptate velit esse cillum dolore eu fugiat
//               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//               sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </p>
//           </MDBContainer>
//         </main>
//       </div>
