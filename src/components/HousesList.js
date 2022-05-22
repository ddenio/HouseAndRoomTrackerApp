import React from 'react';
import { House } from './House';
import { housesApi } from '../rest/HousesAPI';


export class HousesList extends React.Component {
    state = {
        houses : []
    };

    componentDidMount() {
        this.fetchHouses();
    }

    fetchHouses= async () => {
        //using our housesAPI get here; will also call this to update our state to re-render our houses array
        const houses = await housesApi.get();
        //will re-render our houses array
        this.setState({ houses });
    };

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    };

    addHouse = async ({name}) => {
        // console.log("IT WORKS");
        await housesApi.post({
            name
        });
        this.fetchHouses();
    }



    

    render() {
        return (
            
                
                <div className='house-list'>
                    {/* here we are mapping each house from our state house array, and then create an instance of house using this. */}
                    {this.state.houses.map((house) => (
                        <House
                            house={house}
                            key={house._id}
                            updateHouse={this.updateHouse}
                            addHouse={this.addHouse}
                            />
                    ))};
                </div>
           
        )
    }
}