import { useEffect, useState } from 'react';
import {getGifts} from '../helpers/GetGifts';


export const useFetchGifts = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect( () => {
        getGifts(category)
            .then( img => {

                setState({
                    data: img,
                    loading: false
                });
            })
    }, [category])

    return state; // { data: [], loading: true }
}