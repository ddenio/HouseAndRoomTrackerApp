import React, { useState } from 'react';

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);

    const handleAreaInput =(e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div className='bg-primary p-2'>
            <h4>Add a new room</h4>
            <form onSubmit={onSubmit} className='m-1'>
                <input
                    type='text'
                    placeholder='Room name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    
                    />
                <input 
                    type='text'
                    placeholder='Room area'
                    onChange={handleAreaInput}
                    value={area}
                    
                    />
                <button className='btn btn-dark m-2' type='submit'>Add Room</button>
            </form>
        </div>
    )
}