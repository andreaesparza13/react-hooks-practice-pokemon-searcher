import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {

  const [name, setName] = useState("")
  const [hp, setHp] = useState(0)
  const [front, setFrontUrl] = useState("")
  const [back, setBackUrl] = useState("")

  function addPokemon() {
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({
        name,
        hp,
        sprites: {
          front,
          back,
          }
    })
  })
    .then(res => res.json())
}

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={addPokemon}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            type="text"
            label="Name" 
            placeholder="Name" 
            name="name" 
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            type="number"
            onChange={(e) => setHp(e.target.value)}
          />
          <Form.Input
            fluid
            type="text"
            label="Front Image URL"
            placeholder="url"
            name="front"
            onChange={(e) => setFrontUrl(e.target.value)}
          />
          <Form.Input
            fluid
            type="text"
            label="Back Image URL"
            placeholder="url"
            name="back"
            onChange={(e) => setBackUrl(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
