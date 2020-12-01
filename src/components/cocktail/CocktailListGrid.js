import React from 'react'

import {useAppContextGlobal} from '../../context'
import Loading from '../../components/Loading'
import CocktailItemGrid from './CocktailItemGrid'

const CocktailListGrid = () => {

    const {loading, cocktails} = useAppContextGlobal();

    if(loading) {
        return <Loading />
    }

    if(cocktails.length < 1) {
        return <h1 style={{textAlign:'center'}}>No Cocktails Matched Your Search Criteria</h1>
    }

    return (
        <div className="grid-container">
            {cocktails.map((item)=>{
                return <CocktailItemGrid key={item.id} {...item}/>
            })}
        </div>
    )
}

export default CocktailListGrid
