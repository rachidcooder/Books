"use client"
import React, { useState } from 'react';
import { countyCode } from '../../data/data.js';
import { AiFillDelete } from 'react-icons/ai'
import { FaCcVisa, FaPaypal } from 'react-icons/fa'
import { FaCcMastercard } from 'react-icons/fa6'



function Address({ data }: any) {

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
  const [istoPay, setIstopPay] = useState(false);
  const [tolat, setTotal] = useState(1);
  const [cardN, setCardN] = useState("");
  const [cvv, setCvv] = useState("");
  const [dateCard, setDateCard] = useState("");

  const onSave = async () => {

    if (!countryName || !contactName || !mobile || !city || !street || !province || !zip) {
      setErr("Some fields are empty!");
    } else {

      setErr("");
    }
  }

  const setCodeCountry = (name: string) => {
    const code = countyCode.find((it) => it.name === name)?.code || "";
    setCountryCode(code);
  };


  const OrderNow = async () => {

    if (!cardN || !cvv || !dateCard) {
      setErr("all information required!");
      return;
    }

  }



  return (
    <div className='max-w-[1640px] p-5'>

      <div>
        <h1 className='md:text-3xl text-xl font-bold py-3'>Shipping Address</h1>
        <div className='bg-gray-50 shadow-sm p-4'>
          <h1 className='text-xl font-bold py-3 mt-3'>Country/Region</h1>
          <select
            className='px-10 py-2 rounded border border-gray-400 outline-none'
            value={countryName}
            onChange={(e) => { setCountryName(e.target.value); setCodeCountry(e.target.value) }}
          >
            {countyCode.map((country, i) => (
              <option key={i} value={country.name}>{country.name}</option>
            ))}
          </select>
        </div>

        <div className='bg-gray-50 shadow-sm p-4 mt-3'>
          <h1 className='text-xl font-bold py-3'>Personal Information</h1>
          <input
            className='px-5 py-2 outline-none rounded-lg m-2 bg-gray-200'
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
              className='px-5 py-2 outline-none rounded-lg bg-gray-200 my-1'
              type='text'
              placeholder='Mobile Number *'
              value={mobile}
              onChange={(e) => { setMobile(e.target.value) }}
            />
          </div>
        </div>

        <div className='bg-gray-50 shadow-sm p-4 mt-3 flex lg:flex-row flex-col'>
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
            className='bg-gray-200 outline-none px-5 py-2 rounded-lg m-2'
            type='text'
            placeholder='City*'
            value={city}
            onChange={(e) => { setCity(e.target.value) }}
          />
          <input
            className='bg-gray-200 outline-none px-5 py-2 rounded-lg m-2'
            type='text'
            placeholder='ZIP code*'
            value={zip}
            onChange={(e) => { setZip(e.target.value) }}
          />
        </div>

        {/**  Payment */}
        <div className=' bg-gray-100 m-2 p-1 rounded '>
          <h1 className='text-xl font-bold'>Payment Methods</h1>
          <h2 className='text-xl text-blue-500 cursor-pointer'
            onClick={() => { setIstopPay(true); setErr("") }}
          >Select Payment Method</h2>
        </div>

        {/** To add card */}
        {istoPay ? <div className='fixed h-screen w-full bg-black/90 top-0 left-0 z-10'>
        </div> : ""}
        {istoPay ? <div
          className='w-full h-screen z-10 fixed top-0 left-0  flex justify-center items-center'>
          <div className='w-[400px] bg-gray-200 p-5 rounded-lg'>
            <div className=' bg-white my-1 rounded-lg p-2'>
              <h1 className=' font-bold text-center'>Add a new card</h1>
              <div className='flex flex-row'>
                <FaCcVisa size={20} className='mx-2' />
                <FaCcMastercard size={20} className='mx-2' />
                <FaPaypal size={20} className='mx-2' />
              </div>
            </div>
            <input type='text' placeholder='Card Number'
              className='w-full my-1 outline-none p-2 rounded-lg'
              value={cardN}
              onChange={(e) => { setCardN(e.target.value) }} />
            <input type='text' placeholder='MM/YY'
              className='w-full my-1 outline-none p-2 rounded-lg' />
            <input type='text' placeholder='CVV'
              className='w-full my-1 outline-none p-2 rounded-lg'
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />

            <div className='flex items-center py-3'>
              <label className='px-3'>Save card details</label>
              <input type='checkbox' defaultChecked
                className='w-6 h-6 rounded-lg outline-none' />
            </div>
            {err && <span className='text-red-600 text-xl font-semibold p-1'>{err}</span>}
            <div className=' flex justify-between px-2 space-x-2'>
              <button onClick={() => { OrderNow() }}
                className="text-xl bg-orange-700 font-bold text-center py-1 rounded-full w-full text-white">
                confirm
              </button>
              <button onClick={() => { setIstopPay(false); setErr("") }}
                className="text-xl bg-orange-700 font-bold text-center py-1 rounded-full w-full text-white">
                cancel
              </button>
            </div>

          </div>
        </div> : ""}


        {/**  ---- */}
        <div className='bg-gray-50 shadow-sm px-4 py-2 flex justify-center flex-col'>
          <div className='p-3 flex items-center'>
            <label className='font-bold text-xl'>Set as default shipping address</label>
            <input
              type="checkbox"
              className="mx-2 w-6 h-6 bg-orange-900 "
              id="myCheckbox"
              name="myCheckbox"
              checked={asdefAddress}
              onChange={(e) => { setAsdefAdress(e.target.checked) }}
            />
          </div>

          {err && !istoPay && <span className='text-red-600 font-bold text-xl p-1'>{err}</span>}
          <div className='p-3'>
            <button
              onClick={() => onSave()}
              className='rounded-lg bg-orange-700 text-white font-bold py-1 px-5 w-full
                hover:bg-orange-800'
            >
              Buy
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Address;
