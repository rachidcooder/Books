"use client"
import React, { useEffect, useReducer, useState } from 'react';
import { countyCode } from '../../data/data.js';
import { AiFillDelete } from 'react-icons/ai'
import { FaCcVisa, FaPaypal } from 'react-icons/fa'
import { FaCcMastercard } from 'react-icons/fa6'
import { FaWhatsapp } from "react-icons/fa";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';


interface State {
  count: number;
}

type Action =
  | { type: 'increment' }
  | { type: 'decrement' };


const initialState: State = {
  count: 1
};


const counterReduce = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: Math.min(state.count + 1, 5) };
    case 'decrement':
      return { ...state, count: Math.max(state.count - 1, 1) };
    default:
      return state;
  }
};

function Address({ data }: any) {

  const [state, dispatch] = useReducer(counterReduce, initialState);

  const [countryName, setCountryName] = useState("Morocco");
  const [countryCode, setCountryCode] = useState("+212");
  const [contactName, setContactName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [province, setProvince] = useState("");
  const [zip, setZip] = useState("");
  const [asdefAddress, setAsdefAdress] = useState(true);
  const [err, setErr] = useState("");
  //

  const [total, setTotal] = useState(0);

  const [isOnline, setIsOnline] = useState(false);
  const [buy, setTobuy] = useState(false);


  useEffect(() => {
    const t = state.count * data[0].price;
    setTotal(t);
  }, [state.count])
  const increment = () => {
    dispatch({ type: 'increment' });
  };


  const decrement = () => {
    dispatch({ type: 'decrement' });
  };


  const onSave_Buy = async () => {
    //EJmxVRBeU-7kNdB2u9YTglJUhHqY-icOiF9xfKsSXSqrgQwT3p66DTOpwM2J9_GPn-jXp3Nlyy72BjJt
    //AbWY6ass5oHwPubLsDbfLu5U4OKRM1cOlDkb2B4cy0LJPnubnPf11ltL5W7NKau1Uv0Y4XR6HMpMHMBs

    if (!countryName || !contactName || !mobile || !city || !street || !province || !zip) {
      setErr("Some fields is empty!");
    } else {

      setErr("");
      setTobuy(true)
    }
  }

  const setCodeCountry = (name: string) => {
    const code = countyCode.find((it) => it.name === name)?.code || "";
    setCountryCode(code);
  };



  return (
    <div className='max-w-[1640px] sm:p-5 p-2 text-gray-900'>

      <div className=' sm:flex items-center  sm:p-5 bg-gray-50'>
        <img src={data[0].image} className='w-[100px] h-[120px]' alt='' />
        <div className=' sm:px-5 p-1 '>
          <h1 className=' sm:text-3xl text-2xl font-bold '>{data[0].title}</h1>
          <h1 className=' text-orange-700 text-xl font-bold'>{data[0].price} $$</h1>
          <div className=' space-x-1 '>
            <span className='border text-xl font-bold px-2 cursor-pointer bg-gray-100'
              onClick={() => decrement()}>-</span>
            <span className='border  text-xl font-bold px-2 bg-gray-100'>{state.count}</span>
            <span className='border  text-xl font-bold px-2 cursor-pointer bg-gray-100'
              onClick={() => increment()}>+</span>
          </div>
          <div className=' text-xl space-x-2 p-2 text-gray-900 '>
            <span className=''>Total :</span> <span>{total}$</span>
          </div>
        </div>
      </div>

      <div className=" flex flex-col sm:flex-row sm:items-center space-x-1 sm:space-x-4 sm:py-3 space-y-2">
        <h1 className='text-xl sm:w- font-semibold text-gray-800 '>Paiement when recieving : </h1>
        <div className='flex'>
          <button
            className={` sm:px-4 p-1 rounded-full  ${!isOnline ? 'bg-green-500 hover:bg-green-600' : ' border-4'}`}
            onClick={() => setIsOnline(false)}
          >
            Yes
          </button>
          <button
            className={`s:px-4 p-1 rounded-full ${isOnline ? 'bg-red-500 hover:bg-red-600' : ' border'}`}
            onClick={() => setIsOnline(true)}
          >
            No
          </button>
        </div>

      </div>


      {!isOnline && <div className='flex  flex-col items-center justify-center h-full sm:p-12 p-4'>
        <h1 className=' sm:text-2xl font-semibold p-1 mt-10 text-center'> Choose the quantity and then  </h1>
        <h1 className='text-xl sm:text-3xl font-semibold text-center'>send a message on WhatsApp </h1>
      </div>}


      {isOnline && <div>
        <h1 className='md:text-3xl text-xl font-bold py-3'>Shipping Address</h1>
        <div className='bg-gray-50 shadow-sm p-4'>
          <h1 className='text-xl font-bold sm:py-3 sm:mt-3 p-1'>Country/Region</h1>
          <select
            className='sm:px-5 p-2 rounded border border-gray-400 outline-none'
            value={countryName}
            onChange={(e) => { setCountryName(e.target.value); setCodeCountry(e.target.value) }}
          >
            {countyCode.map((country: any, i: any) => (
              <option key={i} value={country.name}>{country.name}</option>
            ))}
          </select>
        </div>

        <div className='bg-gray-50 shadow-sm p-2 sm:p-4 mt-1 sm:mt-3'>
          <h1 className='text-xl font-bold py-3'>Personal Information</h1>
          <input
            className='sm:px-5 p-2 outline-none rounded-lg m-2 bg-gray-200'
            type='text'
            placeholder='Contact Name *'
            value={contactName}
            onChange={(e) => { setContactName(e.target.value) }}
          />
          <div className='p-2 flex lg:flex-row flex-col'>
            <input
              className='text-center py-2 outline-none rounded-lg me-2 bg-gray-200 my-1'
              type='text'
              placeholder='Country Code (+XXX)'
              value={countryCode}
              readOnly
            />
            <input
              className='sm:px-5 p-2 outline-none rounded-lg bg-gray-200 my-1'
              type='text'
              placeholder='Mobile Number *'
              value={mobile}
              onChange={(e) => { setMobile(e.target.value) }}
            />
          </div>
        </div>

        <div className='bg-gray-50 shadow-sm p-2 sm:p-4 sm:1 sm:mt-3 flex lg:flex-row flex-col'>
          <input
            className='bg-gray-200 outline-none px-5 py-2 rounded-lg m-2'
            type='text'
            placeholder='Street, house/apprtement *'
            value={street}
            onChange={(e) => { setStreet(e.target.value) }}
          />
          <input
            className='bg-gray-200 outline-none px-5 py-2 rounded-lg m-2'
            type='text'
            placeholder='Province*'
            value={province}
            onChange={(e) => { setProvince(e.target.value) }}
          />
          <input
            className='bg-gray-200 outline-none sm:px-5 p-2 rounded-lg m-2'
            type='text'
            placeholder='City*'
            value={city}
            onChange={(e) => { setCity(e.target.value) }}
          />
          <input
            className='bg-gray-200 outline-none sm:px-5 p-2 rounded-lg m-2'
            type='text'
            placeholder='ZIP code*'
            value={zip}
            onChange={(e) => { setZip(e.target.value) }}
          />
        </div>


        <div className='bg-gray-50 shadow-sm sm:px-5 p-2 flex justify-center flex-col'>
          <div className='p-3 flex items-center'>
            <label className='font-bold sm:text-xl'>Set as default shipping address</label>
            <input
              type="checkbox"
              className="mx-2 w-6 h-6 bg-orange-900 "
              id="myCheckbox"
              name="myCheckbox"
              checked={asdefAddress}
              onChange={(e) => { setAsdefAdress(e.target.checked) }}
            />
          </div>

          {err && <span className='text-red-600 font-bold sm:text-xl p-1'>{err}</span>}

          <div className='p-3'>
            {!buy &&
              <button onClick={() => { onSave_Buy() }}
                className='rounded-lg bg-orange-500 font-bold py-1 sm:px-5 w-full hover:bg-orange-600'>Save</button>
            }
            {buy && <PayPalScriptProvider options={{ clientId: "AbWY6ass5oHwPubLsDbfLu5U4OKRM1cOlDkb2B4cy0LJPnubnPf11ltL5W7NKau1Uv0Y4XR6HMpMHMBs" }}>
              <PayPalButtons style={{ layout: "horizontal" }} />
            </PayPalScriptProvider>}

          </div>
        </div>

      </div>}


      {!isOnline && <a href={`https://wa.me/212616421373?text=I%27m%20interested%20in%20this%20Book%0ABook_ID:%20${data[0].id}%0ABook_Name%20:%20${data[0].title}%0ABook_Price%20:%20${data[0].price}$%20%0AQuantity%20:%20${state.count}%0ATotal%20:%20${total}$`}
        target="_blank" className=' fixed  bottom-0 end-0 m-10  bg-gray-50 
          rounded text-4xl text-green-700 font-bold  p-1'><FaWhatsapp size={40} /></a>}
    </div>
  );
}

export default Address;
