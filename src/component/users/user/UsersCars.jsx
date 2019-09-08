import React from 'react'
import { Header } from 'semantic-ui-react'
import CarList from "../../cars/CarList"

const UsersCars = ({firstName, cars}) => {
    const text = cars.length === 0 ? ` doesn't have a cars` : `'s cars`;
    return (
        <div>
            <Header content={`${firstName}${text}`} />
            <CarList carList={cars} displayFreeOrTaken={false}/>
        </div>
    );
};

export default UsersCars;