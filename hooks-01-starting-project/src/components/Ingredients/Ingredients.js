import React, { useState, useEffect, useRef } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';

function Ingredients(props) {

  const [ingredientState, updateIngredientState] = useState([])
  const [varOne, updatevarOne] = useState({ varOne: 'one' })
  const [varTwo, updatevarTwo] = useState({ varTwo: 'two' })
  let reffbtn = useRef();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => updateIngredientState([json]))

    console.log(reffbtn.current)
    return () => { console.log('funn') }
  }
    , [])

  useEffect(() => {
    console.log('varone')
  }, [varOne])

  useEffect(() => {

    console.log('both')
  }, [varOne, varTwo])

  // useEffect(() => {    this will run this code infinite times, to overcome this, we should use UseCallback react hook
  //   updatevarOne({ varOne: 'two' })
  //   console.log('both')
  // }, [varOne, varTwo])

  var onClickk = () => {
    if (varOne.varOne == 'one') {
      updatevarOne({ varOne: 'two' })
    } else {
      updatevarTwo({ varTwo: 'twooo' })
    }
    props.closee();
  }

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
      if (val.id === eve) {
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

      <button ref={reffbtn} onClick={onClickk}>clickk</button>
      <section>
        <Search />
        <IngredientList onRemoveItem={removeIngredientHandler} ingredients={ingredientState} />
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
