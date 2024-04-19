import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


export const HomePage = () => {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
            .then(response => {
                setCoffees(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    return (
        <>
            <>

                <div className="banner-background"></div> {/* Banner de fondo */}

                <div className="container text-center py-5 coffee-list-container">
                    <h2 className="my-4">Our Collection</h2>
                    <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                    <div className="btn-group my-4">
                        <button className="btn btn-custom">All Products</button>
                        <button className="btn btn-custom">Available Now</button>
                    </div>
                    <div className="row">
                        {coffees.map((coffee, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="card coffee-card">
                                    {coffee.votes > 30 && <span className="badge badge-warning">Popular</span>}
                                    <img src={coffee.image} className="card-img-top mt-2" alt={coffee.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{coffee.name}</h5>
                                        <span className="badge-price">{coffee.price}</span>
                                        <br />
                                        <br />
                                        {coffee.votes >= 100 ? <span className="badge-exists">Sold out</span> : <span className="badge-available">Available</span>}

                                    </div>
                                    <div className="card-footer">
                                        <span className="rating">⭐ {coffee.rating}</span> <span>({coffee.votes} votes)</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </>
        </>
    )
}
