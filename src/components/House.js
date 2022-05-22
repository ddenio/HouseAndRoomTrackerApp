import React from 'react';
import { NewRoomForm } from './NewRoomForm';
import { NewHouseForm } from './NewHouseForm';

export const House = (props) => {

    const { house, updateHouse, addHouse } = props;

    const deleteRoom = (roomId) => {
        //new variable here(new object), spreading house component out using ... spread operator
        const updatedHouse = {
            ...house,
            //rooms we will update to a different value, same array, minus, but filter out room with Id we are trying to delte
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        //then send http request to update our house/room values
        updateHouse(updatedHouse);
    }

    const addNewHouse = (house) =>
        addHouse(house);

    const addNewRoom = (room) => 
        //this will be a new array, that takes all the values from teh old array, and adding a new room to it and then returning it
        updateHouse({ ...house, rooms: [...house.rooms, room]});

    const rooms = () => (
        <div className='card d-flex justified-content-center text-center p-1 m-2' id='delete-room-div'>
            {house.rooms.map((room, index) => (
                <div key={index} className='card-body text-center'>
                    <label className='m-2 font-weight-bold'> {`Room Name: ${room.name}, Area: ${room.area}`}</label>
                    <button className='btn btn-danger m-1' onClick={(e) => deleteRoom(room._id)}>Delete Room</button>
                </div>
            ))}
        </div>
    );

    
    //now want to return entire house component together
    return (
        <div className='card m-4 d-flex justified-content-center text-center p-2 border border-secondary rounded' id='card-background'>
            <div className='card-header bg-primary text-centered m-2'>
                <NewHouseForm addNewHouse={addNewHouse} />
            </div>
            <div className='card-body'>
                <h1>{house.name}</h1>
                    
                    {
                        //props we are passing in; all of our rooms, houseId, and deleteRoom function
                        rooms({ rooms, houseId: house._id, deleteRoom})
                    }
                    
                <NewRoomForm addNewRoom={addNewRoom} />
            </div>
        </div>
    )
};