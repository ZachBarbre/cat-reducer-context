import React, { useContext, useState } from 'react';
import StateContext from '../context'



const CatActivity = () => {
    const [value, dispach] = useContext(StateContext);
    const[newName, setNewName] = useState('')
    const { name, activity } = value;
    
    const handleClick = (action) => {
        dispach({
            type: action
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispach({
            type: 'CHANGE_NAME',
            name: newName
        })
        setNewName('');
    }

    return (
        <>
            <p>{name} is {activity}</p>
            <button onClick={() => handleClick('ACTION_NAP')}>Napping</button>
            <button onClick={() => handleClick('ACTION_PLAY')}>Playing</button>
            <button onClick={() => handleClick('ACTION_EAT')}>Eating</button>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                type="text" 
                value={newName}
                placeholder="New Name"
                onChange={(e) => setNewName(e.target.value)}
                />
                <button type="submit">New Cat</button>
            </form>
        </>
    )
}

export default CatActivity;