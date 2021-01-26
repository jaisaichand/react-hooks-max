import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  const submitHandler = event => {
    console.log(inputState[0])
    event.preventDefault();
    props.onUpdate({ amount: inputState[0].amount, title: inputState[0].title });
    // ...
  };

  const inputState = useState({ title: '', amount: '' })

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={inputState[0].title} onChange={(event) => {
              let gun = event.target.value;
              inputState[1]((previnpstate) => ({ title: gun, amount: previnpstate.amount }))
            }} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={inputState[0].amount} onChange={(event) => {
              let gunn = event.target.value;
              inputState[1]((prevstate) => ({ amount: gunn, title: prevstate.title }))
            }} />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit" onClick={submitHandler} >Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
