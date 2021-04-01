import React, { useState } from "react";
// Bootstrap for react
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
function Todo() {
  // Setting up state
  const [userInputs, setuserInput] = useState("");
  const [lists, setList] = useState([]);

  // Set a user input value
  const updateInput = (value) => {
    setuserInput(value);
  };

  // Add item if user input in not empty
  const addItem = () => {
    if (userInputs !== "") {
      const userInput = {
        // Add a random id which is used to delete
        id: Math.random(),

        // Add a user value to list
        value: userInputs,
      };

      // Update list
      const list = [...lists];
      list.push(userInput);

      // reset state
      setuserInput("");
      setList(list);
    }
  };

  // Function to delete item from list use id to delete
  const deleteItem = (key) => {
    const list = [...lists];

    // Filter values and leave value which we need to delete
    const updateList = list.filter((item) => item.id !== key);

    // Update list in state
    setList(updateList);
  };

  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
          fontWeight: "bolder",
        }}
      >
        TODO LIST
      </Row>

      <hr />
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="add item . . . "
              size="lg"
              value={userInputs}
              onChange={(item) => updateInput(item.target.value)}
              aria-label="add something"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="dark" size="lg" onClick={() => addItem()}>
                ADD
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <ListGroup>
            {/* map over and print items */}
            {lists.map((item) => {
              return (
                <ListGroup.Item
                  variant="dark"
                  action
                  onClick={() => deleteItem(item.id)}
                >
                  {item.value}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Todo;
