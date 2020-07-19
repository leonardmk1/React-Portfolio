import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="aqua-gradient" className="font-small p-3 mt-5 text-center">
      <MDBContainer fluid >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a href="https://github.com/leonardmk1"> Matthew Leonard</a>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPage;
