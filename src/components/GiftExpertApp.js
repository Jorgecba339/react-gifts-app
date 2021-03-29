
import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GiftGrid } from './GiftGrid';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    
    return (
        <>
            <h2>Gift Expert App</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

        
            <ol>
                {
                    categories.map( category => (
                        <GiftGrid
                            key={ category }  
                            category={ category }
                        />
                    ))
                }
            </ol>

        </>
    )
}


