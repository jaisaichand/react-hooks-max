import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';

function Ingredients() {

  const [ingredientState, updateIngredientState] = useState([])

  const addIngredientHandler = (eve) => {
    console.log(eve);
    updateIngredientState(
      [
        ...ingredientState,
        { id: Math.random().toString(), ...eve }
      ]
    )
  }

  const removeIngredientHandler = (eve) => {
    console.log(eve);
    let gunn = [...ingredientState]
    gunn.forEach((val, ind) => {
      if (val.id == eve) {
        gunn.splice(ind, 1)
        updateIngredientState([
          ...gunn
        ])
      }
    })

  }
  return (
    <div className="App">
      <IngredientForm onUpdate={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList onRemoveItem={removeIngredientHandler} ingredients={ingredientState} />
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
