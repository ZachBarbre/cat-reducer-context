import React, { useContext, useState } from 'react';
import StateContext from '../context'


const handleClick = (action, dispach) => {
    dispach({
        type: action
    })
}

const CatActivity = () => {
    const [value, dispach] = useContext(StateContext);
    const[newName, setNewName] = useState('')
    const { name, activity } = value;
    
    const handleSubmit = (e, dispach) => {
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
            <button onClick={() => handleClick('ACTION_NAP', dispach)}>Napping</button>
            <button onClick={() => handleClick('ACTION_PLAY', dispach)}>Playing</button>
            <button onClick={() => handleClick('ACTION_EAT', dispach)}>Eating</button>
                <form onSubmit={(e) => handleSubmit(e, dispach)}>
                    <input 
                    type="text" 
                    name="newName"
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