import React from 'react';
import { useState, useEffect } from 'react';
import FormInput from '../UI/FormInput';
import { capitalise } from '../../utils/capitaliseFirstLetter'
import { useDispatch, useSelector } from 'react-redux';
import { 
  setOrderEmail,
  setOrderFirstName,
  setOrderLastName,
  setOrderCountry,
  setOrderAddressLineOne,
  setOrderAddressLineTwo,
  setOrderCity,
  setOrderState,
  setOrderZip,
  setOrderPhone,
  setOrderNotes } from '../../store/orderSlice';

const ShippingForm = () => {

  const dispatch = useDispatch();
  const address = useSelector(state => state.user.address);
  const emailDB = useSelector(state => state.user.email);
  const productsCount = useSelector(state => state.cart.count);

  useEffect(() => {
    dispatch(setOrderEmail(emailDB ? emailDB : null));
    dispatch(setOrderFirstName(address ? address.firstname : null));
    dispatch(setOrderLastName(address ? address.lastname : null));
    dispatch(setOrderAddressLineOne(address ? address.addressLineOne : null));
    dispatch(setOrderAddressLineTwo(address ? address.addressLineTwo : null));
    dispatch(setOrderState(address ? address.state : null));
    dispatch(setOrderCountry(address ? address.country : null));
    dispatch(setOrderCity(address ? address.city : null));
    dispatch(setOrderZip(address ? address.zip : null));
  }, [])

  const [email, setEmail] = useState(emailDB ? emailDB : null);
  const [firstName, setFirstName] = useState(address ? address.firstname : null);
  const [lastName, setLastName] = useState(address ? address.lastname : null);
  const [addressLineOne, setAddressLineOne] = useState(address ? address.addressLineOne : null);
  const [addressLineTwo, setAddressLineTwo] = useState(address ? address.addressLineTwo : null);
  const [state, setState] = useState(address ? address.state : null);
  const [country, setCountry] = useState(address ? address.country : null);
  const [city, setCity] = useState(address ? address.city : null);
  const [zip, setZip] = useState(address ? address.zip : null);

  const changeEmail = (e) => {
    dispatch(setOrderEmail(e.target.value))
    setEmail(e.target.value)
  }
  const changeFirstName = (e) => {
    dispatch(setOrderFirstName(e.target.value))
    setFirstName(e.target.value)
  }
  const changeLastName = (e) => {
    dispatch(setOrderLastName(e.target.value))
    setLastName(e.target.value)
  }
  const changeCountry = (e) => {
    dispatch(setOrderCountry(e.target.value))
    setCountry(e.target.value)
  }
  const changeAddressLineOne = (e) => {
    dispatch(setOrderAddressLineOne(e.target.value))
    setAddressLineOne(e.target.value)
  }
  const changeAddressLineTwo = (e) => {
    dispatch(setOrderAddressLineTwo(e.target.value))
    setAddressLineTwo(e.target.value)
  }
  const changeCity = (e) => {
    dispatch(setOrderCity(e.target.value))
    setCity(e.target.value)
  }
  const changeState = (e) => {
    dispatch(setOrderState(e.target.value))
    setState(e.target.value)
  }
  const changeZip = (e) => {
    dispatch(setOrderZip(e.target.value))
    setZip(e.target.value)
  }
  const changePhone = (e) => {
    dispatch(setOrderPhone(e.target.value))
  }
  const changeNotes = (e) => {
    dispatch(setOrderNotes(e.target.value))
  }

  return (
    <form className="shippingform">

      <div className="shippingform-header">
        <div className="maintext">Shipping</div>
        <div className="shipping-item-count">
          ( {productsCount} )
        </div>
      </div>

      <div className="shippingform-inputs">
        <div className="name">
          <FormInput 
            label='FIRST NAME *'
            value={capitalise(firstName)}
            inputId='firstname'
            changeInput={changeFirstName}
          />
          <FormInput 
            label='LAST NAME *'
            value={capitalise(lastName)}
            inputId='lastname'
            changeInput={changeLastName}
          />
        </div>
        <div className="country">
          <FormInput 
            label='COUNTRY *'
            value={country}
            inputId='country'
            changeInput={changeCountry}
          />
        </div>
        <div className="address">
          <FormInput 
            label='ADDRESS *'
            value={addressLineOne}
            inputId='addressline1'
            placeholder='House number and street name'
            changeInput={changeAddressLineOne}
          />
          <FormInput 
            inputId='addressline2'
            value={addressLineTwo}
            placeholder='Apartment, suite, unit, etc. (optional)'
            changeInput={changeAddressLineTwo}
          />
        </div>
        <div className="city-state-zip">
          <FormInput 
            label='TOWN / CITY *'
            value={city}
            inputId='city'
            changeInput={changeCity}
          />
          <FormInput 
            label='STATE *'
            value={state}
            inputId='state'
            changeInput={changeState}
          />
          <FormInput 
            label='ZIP CODE *'
            value={zip}
            inputId='zip'
            changeInput={changeZip}
          />
        </div>
        <div className="phone-email">
          <FormInput 
            label='PHONE (OPTIONAL)'
            inputId='phone'
            changeInput={changePhone}
          />
          <FormInput 
            label='EMAIL ADDRESS *'
            value={email}
            inputId='email'
            changeInput={changeEmail}
          />
        </div>
        <div className="notes">
          <label>ORDER NOTES (OPTIONAL)</label>
          <textarea 
            className='notes-textarea'
            placeholder='Notes about your order, e.g. special notes for delivery.'
            onChange={(event) => changeNotes(event)}
          />
        </div>
      </div>
    </form>
  )
}

export default ShippingForm;