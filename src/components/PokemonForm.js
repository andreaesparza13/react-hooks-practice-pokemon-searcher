import React, { useState } from "react";
import { Form } from "semantic-ui-react";

// const blankForm = {
//   name: "",
//   hp: 0,
//   sprites: {
//     frontUrl: "",
//     backUrl: "",
//   } 
// }

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
          },
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
            // value={formData.name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            type="number"
            // value={formData.hp}
            onChange={(e) => setHp(e.target.value)}
          />
          <Form.Input
            fluid
            type="text"
            label="Front Image URL"
            placeholder="url"
            name="front"
            // value={formData.sprites.frontUrl}
            onChange={(e) => setFrontUrl(e.target.value)}
          />
          <Form.Input
            fluid
            type="text"
            label="Back Image URL"
            placeholder="url"
            name="back"
            // value={formData.sprites.backUrl}
            onChange={(e) => setBackUrl(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;


// THIS IS ME TRYING TO DO IT A DIFFERENT WAY!!!
// function PokemonForm({ onAddPokemon }) {
//   const [formData, setFormData] = useState(blankForm)
//   function handleOnChange(e) {
//     const { name, value } = e.target
//     setFormData({ ...formData, [name]: value })
//   }
//   function handleSubmit(e) {
//     console.log("submitting form...");
//     fetch('http://localhost:3001/pokemon', {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify()
//       })
//     .then(res => res.json())
//     .then(newPokemon => {onAddPokemon(newPokemon)})
//   setFormData(blankForm)
//   }