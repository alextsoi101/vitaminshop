import React from 'react';
import EffectCard from '../cards/EffectCard';
import effecticon from '../../assets/icons/effects.svg';
import relieveicon from '../../assets/icons/relieve.svg';
import ingridientsicon from '../../assets/icons/ingridients.svg';
import { useSelector } from 'react-redux';

const ProductEffects = () => {

  const effects = useSelector(state => state.product.effects);
  const relieve = useSelector(state => state.product.relieve);
  const ingridients = useSelector(state => state.product.ingridients);

  return (
    <div className="producteffects">
      <EffectCard 
        image={effecticon}
        maintext="EFFECTS"
        text={effects}
      />
      <EffectCard 
        image={relieveicon}
        maintext="MAY RELIEVE"
        text={relieve}
      />
      <EffectCard 
        image={ingridientsicon}
        maintext="INGRIDIENTS"
        text={ingridients}
      />
    </div>
  )
}
  
export default ProductEffects;