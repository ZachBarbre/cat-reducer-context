import React, { useReducer } from 'react';
import { StateProvider } from './context';
import './App.css';
import CatActivity from './components/CatActivity';

function App() {
  const initalState = {
    name: 'Nell',
    activity: 'napping'
  };

  const reducer = (state, action) => {
    
    switch(action.type) {
      case 'ACTION_NAP': {
        return {
          ...state,
          activity: 'napping'
        }
      }
      case 'ACTION_EAT': {
        return {
          ...state,
          activity: 'eating'
        }
      }
      case 'ACTION_PLAY': {
        return {
          ...state,
          activity: 'playing'
        }
      }
      case 'CHANGE_NAME': {
        const { name } = action;
        console.log(name);
        return {
          ...state,
          name: name
        }
      }
      default:
        return state;
    }
  };

  return (
    <div className='wrapper'>
      <StateProvider value={useReducer(reducer, initalState)}>
        <CatActivity />
      </StateProvider>
    </div>
  );
}

export default App;
