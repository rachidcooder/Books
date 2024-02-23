"use client"
import React, { useState } from 'react';
import { countyCode } from '../../data/data.js';

function Address() {
  const [countryName, setCountryName] = useState("Morocco");
  const [countryCode, setCountryCode] = useState("+212");
  const [contactName, setContactName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [province, setProvince] = useState("");
  const [zip, setZip] = useState("");
  const [asdefAddress, setAsdefAdress] = useState(true);

  const onSave = async () => {
    if (!countryName || !contactName || !mobile || !city || !street || !province || !zip) {
      console.error("Some fields are empty!");
    }
  }

  const setCodeCountry = (name: string) => {
    const code = countyCode.find((it) => it.name === name)?.code || "";
    setCountryCode(code);
  };

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
          <div className='p-3'>
            <button
              onClick={() => onSave()}
              className='rounded-lg bg-orange-700 text-white font-bold py-1 px-5 w-full
                hover:bg-orange-800'
            >
              Save
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Address;
