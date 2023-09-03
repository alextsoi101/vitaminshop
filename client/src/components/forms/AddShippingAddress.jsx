import React from 'react';
import { useState } from 'react';
import MyAccountInput from '../UI/MyAccountInput';
import ButtonLoader from '../loaders/ButtonLoader';
import { capitalise } from '../../utils/capitaliseFirstLetter';
import { useSelector, useDispatch } from 'react-redux';
import { createUserAddress } from '../../store/userSlice';
import { openSuccessSnackbar, openErrorSnackbar } from '../../store/modalSlice';

const AddShippingAddress = () => {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.userId);
  const address = useSelector(state => state.user.address);
  const createAddressError = useSelector(state => state.user.createAddressError);
  const isCreateAddressLoading = useSelector(state => state.user.isCreateAddressLoading);

  const [firstName, setFirstName] = useState(address ? address.firstname : null);
  const [lastName, setLastName] = useState(address ? address.lastname : null);
  const [addressLineOne, setAddressLineOne] = useState(address ? address.addressLineOne : null);
  const [addressLineTwo, setAddressLineTwo] = useState(address ? address.addressLineTwo : null);
  const [state, setState] = useState(address ? address.state : null);
  const [country, setCountry] = useState(address ? address.country : null);
  const [city, setCity] = useState(address ? address.city : null);
  const [zip, setZip] = useState(address ? address.zip : null);

  const changeFisrtName = (e) => {
    setFirstName(e.target.value)
  }
  const changeLastName = (e) => {
    setLastName(e.target.value)
  }
  const changeAddressLineOne = (e) => {
    setAddressLineOne(e.target.value)
  }
  const changeAddressLineTwo = (e) => {
    setAddressLineTwo(e.target.value)
  }
  const changeCountry = (e) => {
    setCountry(e.target.value)
  }
  const changeState = (e) => {
    setState(e.target.value)
  }
  const changeCity = (e) => {
    setCity(e.target.value)
  }
  const changeZip = (e) => {
    setZip(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createUserAddress({
      userId, firstName, lastName, country, addressLineOne, addressLineTwo, city, state, zip
    }))
      .then((data) => {
        if (data.type === 'user/createUserAddress/fulfilled') {
          dispatch(openSuccessSnackbar('Adress updated succsesfully!'))
        }
        if (data.type === 'user/createUserAddress/rejected') {
          dispatch(openErrorSnackbar(data.error.message))
        } 
      })
  }

  return (
    <form 
      className="addshippingaddress"
      onSubmit={(event) => handleSubmit(event)}
    >
      <h3>Shipping address</h3>
      <div className="addshippingaddress-inputs">
        <div className="name">
          <MyAccountInput 
            label='First name *'
            value={capitalise(firstName)}
            inputId='address-firstname'
            changeInput={changeFisrtName}
          />
          <MyAccountInput 
            label='Last name *'
            value={capitalise(lastName)}
            inputId='address-lastname'
            changeInput={changeLastName}
          />
        </div>
        <div className="country">
          <MyAccountInput 
            label='Country *'
            value={country}
            inputId='address-country'
            changeInput={changeCountry}
          />
        </div>
        <div className="address">
          <MyAccountInput 
            label='Address *'
            value={addressLineOne}
            inputId='address-addressline1'
            placeholder='House number and street name'
            changeInput={changeAddressLineOne}
          />
          <MyAccountInput 
            inputId='address-addressline2'
            value={addressLineTwo}
            placeholder='Apartment, suite, unit, etc. (optional)'
            changeInput={changeAddressLineTwo}
          />
        </div>
        <div className="city-state-zip">
          <MyAccountInput 
            label='Town / City *'
            value={city}
            inputId='address-city'
            changeInput={changeCity}
          />
          <MyAccountInput 
            label='State *'
            value={state}
            inputId='address-state'
            changeInput={changeState}
          />
          <MyAccountInput 
            label='Zip Code *'
            value={zip}
            inputId='address-zip'
            changeInput={changeZip}
          />
        </div>
      </div>
      <div className="error-message">
        {createAddressError}
      </div>
      <button
        className="submit-btn"
        type='submit'
      >
        {isCreateAddressLoading ? <ButtonLoader /> : <div>Save changes</div>}
      </button>
    </form>
  )
}

export default AddShippingAddress;