//all logic to make a network call for the Houses endpoint will go here:

const HOUSES_ENDPOINT = 'http://ancient-taiga-31359.herokuapp.com/api/houses';

//is not react class, just a normal class to house a couple of methods to have our fetch calls / http requests
class HousesApi {
    get = async () => {
        //just in case anything goes wrong, we will enclose this in a try-catch block:
        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            //will log out whatever the exception was in conjuction with the console message
            console.log('Oops, looks like fetchHouses had an issue.', e);
        }
    }

    delete = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}` , { 
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like fecthHouses had an issue.', e);
        }
    };

    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like updating houses had an issue.', e);
        }
    }

    post = async (house) => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like updating houses had an issue.', e);
        }
    }
}

//creating an instance of our class to export to use in our other components
export const housesApi = new HousesApi();