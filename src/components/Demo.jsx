import React, { useContext } from 'react';
import StateContext from '../context';

const handleChange = (e, dispach) => {
    dispach({
        type: 'CHANGE_NAME',
        name: e.target.value
    })
}

const Demo = () => {
    const [value, dispach] = useContext(StateContext);
    const { name } = value;

    return(
        <>
            <p>I'm {name}</p>
            <form>
                <input 
                type="text" 
                name="newName"
                placeholder="New Name"
                onChange={(e) => handleChange(e,dispach)}
                />
            </form>
        </>
    )
}

export default Demo;