import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
const Home = () => {
    const tshirts = useLoaderData()
    return (
        <div>
            <h1>t = {tshirts.length}</h1>
        </div>
    );
};

export default Home;