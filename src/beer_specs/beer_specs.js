import React from 'react';
import Spec from './spec';

let BeerSpecs = (props) => {
    const spec = props.beerSpec;
    return (<div>
        <h3>Beer specification</h3>

        <Spec parameter="OG" firstValue={spec.og_low} secondValue={spec.og_high}/>
        <Spec parameter="FG" firstValue={spec.fg_low} secondValue={spec.fg_high}/>
        <Spec parameter="IBU" firstValue={spec.ibu_low} secondValue={spec.ibu_high}/>
        <Spec parameter="SRM" firstValue={spec.srm_low} secondValue={spec.srm_high}/>
        <Spec parameter="ABV" firstValue={spec.abv_low} secondValue={spec.abv_high}/>
    </div>)
}

export default BeerSpecs;