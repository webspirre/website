import React from 'react'
import CheckoutVeiw from './Checkout'
import InfoForm from './InfoForm';

function CheckOutPage() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 my-[100px] mx-2  sm:mx-[100px] rounded-[40px] overflow-hidden">
        <div className="col-span-1 bg-black">
          <CheckoutVeiw />
        </div>
        <div className="col-span-2  text-[14px] bg-[#f5f9ff] p-[37px]">
          <InfoForm />
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage
