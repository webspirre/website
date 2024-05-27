import Image from 'next/image';
import React from 'react'

function Form2() {
  return (
    <div>
      <div className="w-full mt-8 ">
        <label htmlFor="state">Choose Payment method</label>
        <div className=" bg-white flex justify-between items-center w-full h-[60px] p-2 mt-2 border rounded-[8px]">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="i.e. Credit/Debit Card, Paypal, Stripe etc"
              className="w-full outline-none"
            />
          </div>
          <Image
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1716667695/utilities/webspirre/Arrow_-_Down_2_cphnlj.svg"
            height={2}
            width={20}
            alt="dropdown"
          />
        </div>
      </div>
    </div>
  );
}

export default Form2
