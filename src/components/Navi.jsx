import React, { useState } from "react";
import { Container, Navbar , Button , Modal, Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Heart from "react-heart";



const Navi = ({
  songs,
  setSongs,
  inputSearch,
  setInputSearch,
  inputGenre,
  setInputGenre,
}) => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newSong, setNewSong] = useState({
    id: uuidv4(),
    title: "",
    genre: "",
    imageURL: "",
  });
  const handleChange = (e) => {
    setNewSong({ ...newSong, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    setSongs([...songs, newSong]);
    setShow(false);
  };

  const handleSearch = (e) => {
    setInputSearch(e.target.value);

  };
  const handleGenreChange = (e) => {
    setInputGenre(e.target.value);
  };


  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Music App</Navbar.Brand>
          <input
            style={{ width: "20%" }}
            className="Music Name"
            type="text"
            placeholder="Enter Music Name"
            onChange={handleSearch}
          />
          <input
            style={{ width: "20%" }}
            type="text"
            placeholder="Enter Music type"
            onChange={handleGenreChange}
          />

          <Heart
            style={{ width: "2rem" }}
            isActive={active}
            onClick={() => setActive(!active)}
          />
          <Button variant="warning" onClick={handleShow}>
            Add Song
          </Button>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Song</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <label>Song Name</label>
          <Form.Control type="text" onChange={handleChange} name="title" />
          <Form.Label>Song Genre</Form.Label>
          <Form.Control type="text" name="genre" onChange={handleChange} />
          <Form.Label>Song Image</Form.Label>
          <Form.Control type="text" name="imageURL" onChange={handleChange} />
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              onClick={handleClose}
            >
              Close
            </button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Navi