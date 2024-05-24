"use client"
import React, { useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { components } from "react-select";
import FlagsSelect from "react-flags-select";

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

  const countryOptions = countryList()
    .getData()
    .map((country) => ({
      ...country,
      flag: country.value.toLowerCase(),
    }));

  const handleCountryChange = (selectedCountry: CountryOption | null) => {
    setCountry(selectedCountry);
    setState(null);
    if (selectedCountry) {
      // Here you would fetch the states based on the selected country
      // This is a placeholder example with hardcoded states
      if (selectedCountry.value === "US") {
        setStates([
          { value: "CA", label: "California" },
          { value: "TX", label: "Texas" },
          // Add more states as needed
        ]);
      } else {
        setStates([]);
      }
    } else {
      setStates([]);
    }
  };

  const handleStateChange = (selectedState: StateOption | null) => {
    setState(selectedState);
  };

  const CustomSingleValue = (props: any) => (
    <components.SingleValue {...props}>
      <span
        className={`flag-icon flag-icon-${props.data.flag}`}
        style={{ marginRight: 10 }}
      />
      {props.data.label}
    </components.SingleValue>
  );

  const CustomOption = (props: any) => (
    <components.Option {...props}>
      <span
        className={`flag-icon flag-icon-${props.data.flag}`}
        style={{ marginRight: 10 }}
      />
      {props.data.label}
    </components.Option>
  );

  return (
    <form className="space-y-4">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-1/2 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-1/2 p-2 border rounded"
        />
      </div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <Select
        options={countryOptions}
        value={country}
        onChange={handleCountryChange}
        components={{ SingleValue: CustomSingleValue, Option: CustomOption }}
        className="w-full"
        placeholder="Select Country"
      />
      <Select
        options={states}
        value={state}
        onChange={handleStateChange}
        className="w-full mt-4"
        placeholder="Select State"
        isDisabled={!country}
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full p-2 border rounded mt-4"
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full p-2 border rounded mt-4"
      />
    </form>
  );
};

export default Form1;
