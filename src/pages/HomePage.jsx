import React, {useState} from 'react';

const HomePage = () => {
    const [city, setCity] = useState(['Dhaka','Rangpur','Chittagong','Sylhet','Pabna']);
    return (
        <>
            <h1>This is home page</h1>
            <ul>
                {
                    city.map(function (item) {
                        return <li>{item}</li>
                    })
                }
            </ul>
        </>
    );
};

export default HomePage;