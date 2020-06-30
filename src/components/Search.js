import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
} from "mdbreact";
import Characters from "../characters";

const FormPage = () => {
  const [searchResults, setSearchResults] = useState(Characters);
  const [firstNameSearch, setFirstNameSearch] = useState("");
  const [lastNameSearch, setLastNameSearch] = useState("");
  const [titleSearch, setTitleSearch] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstNameSearch(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastNameSearch(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitleSearch(e.target.value);
  };

  const searchCharacter = () => {
    setSearchResults(
      Characters.filter(
        (character) =>
          character.firstname
            .toLowerCase()
            .includes(firstNameSearch.toLowerCase()) &&
          character.lastname
            .toLowerCase()
            .includes(lastNameSearch.toLowerCase()) &&
          character.title.toLowerCase().includes(titleSearch.toLowerCase())
      )
    );
  };

  const sortFirstName = () => {
    const newOrder = [...searchResults];
    setSearchResults(
      newOrder.sort((a, b) => (a.firstname > b.firstname ? 1 : -1))
    );
  };
  const sortLastName = () => {
    const newOrder = [...searchResults];
    setSearchResults(
      newOrder.sort((a, b) => (a.lastname > b.lastname ? 1 : -1))
    );
  };
  const sortTitle = () => {
    const newOrder = [...searchResults];
    setSearchResults(newOrder.sort((a, b) => (a.title > b.title ? 1 : -1)));
  };
 
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="3"></MDBCol>
        <MDBCol md="6">
          <form>
            <p className="h3 text-center m-4" style={{fontFamily:"American Typewriter"}}>Find Employees</p>
            <div className="grey-text">
              <MDBInput
                label="First Name"
                value={firstNameSearch}
                onChange={handleFirstNameChange}
              />
              <MDBInput
                label="Last Name"
                value={lastNameSearch}
                onChange={handleLastNameChange}
              />
              <MDBInput
                label="Title"
                value={titleSearch}
                onChange={handleTitleChange}
              />
            </div>
            <div className="text-center">
              <MDBBtn className="rounded-pill" color="primary" onClick={searchCharacter}>
                Search
              </MDBBtn>
            </div>
            <div className="text-center my-3">
              <p style={{fontFamily: "American Typewriter", fontWeight:"bolder"}}>Sort By:</p>
              <MDBBtn className="rounded-pill" color="info" onClick={sortFirstName}>
                First Name
              </MDBBtn>
              <MDBBtn className="rounded-pill" color="blue" onClick={sortLastName}>
                Last Name
              </MDBBtn>
              <MDBBtn className="rounded-pill" color="indigo" onClick={sortTitle}>
                Title
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
        <MDBCol md="3"></MDBCol>
      </MDBRow>
      <MDBRow className="text-center">
        {searchResults.map((character) => {
          return (
            <MDBCol md="4">
              <MDBCard className="shadow-lg"style={{ width: "22rem", margin: "15px"}}>
              <a target="blank" href={`https://theoffice.fandom.com/wiki/${character.firstname}_${character.lastname}`}>
                <MDBCardImage
                  src={require(`../imgs/${character.firstname}.png`)}
                  style={{ height: "300px", width: "100%" }}
                /></a>
                <MDBCardBody>
                  <MDBCardText style={{fontFamily: "American Typewriter", color: "black"}}>
                    <h3>
                      {character.firstname} {character.lastname}
                    </h3>
                    <h4>{character.title}</h4>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
