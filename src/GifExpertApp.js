import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categoria, setCategoria] = useState(['One punch']);

    return (
        <div>
            
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategory setCategoria={ setCategoria } />

            <ol>
                { 
                    categoria.map( (categoria, i) => {
                        /* return <li key={ categoria }> { categoria } </li> */
                        return <GifGrid 
                                    key={categoria}
                                    categoria={ categoria } 
                                />
                    })
                }
            </ol>
        </div>
    )
}

export default GifExpertApp;
