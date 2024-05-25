"use client";
import React, { useState } from "react";
import countryList from "react-select-country-list";
import Image from "next/image";

type CountryOption = {
  value: string;
  label: string;
  flag: string;
};

type StateOption = {
  value: string;
  label: string;
};

const Form1: React.FC = () => {
  const [country, setCountry] = useState<CountryOption | null>(null);
  const [state, setState] = useState<StateOption | null>(null);
  const [states, setStates] = useState<StateOption[]>([]);
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <form className="space-y-4 mt-[50px]">
      <div className="flex gap-4">
        <div className="w-1/2">
          <label htmlFor="firstname" className="">
            First Name
          </label>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full h-[60px] p-2 mt-2 border rounded-[8px]"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full h-[60px] p-2 mt-2 border rounded-[8px]"
          />
        </div>
      </div>
      <div className="w-full">
        <label htmlFor="email">Email</label>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[60px] p-2 mt-2 border rounded-[8px]"
        />
      </div>

      <div>
        <div className="flex items-center justify-between">
          <h2 className="font-bold">Billing address</h2>

          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              id="checkbox1"
              name="checkbox1"
              checked={checked}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="checkbox1"
              className="ml-2 block text-sm text-gray-900"
            >
              Same as residential address{" "}
            </label>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="email">Country</label>
        <div className=" bg-white flex justify-between items-center w-full h-[60px] p-2 mt-2 border rounded-[8px]">
          <div className="flex gap-2">
            <Image
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1716667666/utilities/webspirre/Rectangle_6_zy8nu2.svg"
              height={2}
              width={27}
              alt="flags"
            />
            <input type="text" className="w-full outline-none" />
          </div>
          <Image
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1716667695/utilities/webspirre/Arrow_-_Down_2_cphnlj.svg"
            height={2}
            width={20}
            alt="flags"
          />
        </div>
      </div>

      <div className="">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full h-[60px] p-2 mt-2 border rounded-[8px]"
        />
      </div>

      <div className="flex gap-4">
        <div className="w-1/2 ">
          <label htmlFor="state">State</label>
          <div className=" bg-white flex justify-between items-center w-full h-[60px] p-2 mt-2 border rounded-[8px]">
            <div className="flex gap-2">
              <input type="text" className="w-full outline-none" />
            </div>
            <Image
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1716667695/utilities/webspirre/Arrow_-_Down_2_cphnlj.svg"
              height={2}
              width={20}
              alt="dropdown"
            />
          </div>
        </div>

        <div className="w-1/2">
          <label htmlFor="city"> City</label>
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 border rounded mt-2 h-[60px]"
          />
        </div>
      </div>
    </form>
  );
};

export default Form1;
