import { useState } from "react";

import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import panIcon from "../icons/frying-pan.png";
import cartIcon from "../icons/shopping-cart.png";
import binIcon from "../icons/bin.png";

import { FRIDGE } from "../testMockData";

const Heading = ({ fridge }) => {
  return (
    <div>
      <h1 style={{ display: "inline-block" }}>Mijn Frigo</h1>
      <span>({fridge.FRIDGE.length} elementen in je frigo)</span>
    </div>
  );
};

const IngredientsTable = ({ fridge }) => {
  return (
    <Table striped bordered hover size="sm">
      <tbody>
        {fridge.FRIDGE.map(({ id, name, amount, unit, expirationDate }) => (
          <IngredientsRow
            key={id}
            name={name}
            amount={amount}
            unit={unit}
            expirationDate={expirationDate}
          />
        ))}
      </tbody>
    </Table>
  );
};

const IngredientsRow = ({ id, name, amount, unit, expirationDate }) => {
  return (
    <tr>
      <td>
        {name} ({amount} {unit})
      </td>
      <td>{expirationDate}</td>
      <td>
        <img src={panIcon} alt="pan" />
        <img src={cartIcon} alt="cart" />
        <img src={binIcon} alt="bin" />
      </td>
    </tr>
  );
};

const addIngredient = () => {
  console.log("add ingredient button clicked");
};

const addToFridge = () => {
  console.log("add to fridge");
};

/* TODO: 
    1. add lookup glass icon to search bar
    2. Bootstrap: let Select display 3 options instead of one, didn't find how to do this with the snippet below, so added normal CSS in for "IngredientsForm" to test code
      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    3. constrolId formBasicEmail has to be changed, to formBasicText?
*/

const IngredientsForm = () => {
  return (
    <Form
      style={{ border: "1px solid grey", padding: "0.5rem", marginTop: "1rem" }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingredient*</Form.Label>
        <Form.Control type="text" placeholder="Zoek ingrediënt..." />
      </Form.Group>

      <SearchResults />

      <SelectAmount />

      <SelectExpirationDate />

      <Button variant="primary" type="submit" onClick={addToFridge}>
        INGREDIÊNT TOEVOEGEN
      </Button>
    </Form>
  );
};

const SearchResults = () => {
  return (
    <select
      name="ingredient"
      size="3"
      style={{ width: "100%", display: "block", marginBottom: "1rem" }}
    >
      <SearchResultsRow />
    </select>
  );
};

const SearchResultsRow = () => {
  return (
    <>
      <option value="hesp">Hesp</option>
      <option value="brood">Brood</option>
      <option value="sla">Sla</option>
      <option value="kaas">Kaas</option>
    </>
  );
};

const SelectAmount = () => {
  return (
    <div>
      <h6>Hoeveelheid*</h6>
      <span>Pannenkoek</span>
      <Button variant="primary">-</Button>
      <span id="amount">1 st.</span>
      <Button variant="primary">+</Button>
    </div>
  );
};

const SelectExpirationDate = () => {
  return (
    <>
      <label htmlFor="expirationDate" style={{ display: "block" }}>
        Vervaldatum
      </label>
      <input
        type="date"
        id="expirationDate"
        name="expirationDate"
        style={{ display: "block" }}
      />
    </>
  );
};

const Frigo = () => {
  const [fridge, setFridge] = useState({ FRIDGE });
  return (
    <>
      <Container>
        <section>
          <Heading fridge={fridge} />
          <IngredientsTable fridge={fridge} />
          <Button variant="primary" onClick={addIngredient}>
            INGREDIÊNT TOEVOEGEN
          </Button>
        </section>
        <section>
          <IngredientsForm />
        </section>
      </Container>
    </>
  );
};

export default Frigo;
