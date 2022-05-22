import React, { useState } from 'react';

export const NewHouseForm = (props) => {
    const [name, setName] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (name) {
            props.addNewHouse({name});
            setName('');
            
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <h4>Add a new House</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='House name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />
                
                <button className='btn btn-dark m-2' type='submit'>Add House</button>
            </form>
        </div>
    )
}