import React from 'react'
import CheckoutVeiw from './Checkout'
import InfoForm from './InfoForm';

function CheckOutPage() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 my-[100px]  mx-[100px] rounded-[40px]">
        <div className="col-span-1">
          <CheckoutVeiw />
        </div>
        <div className="col-span-2 rounded-r-[40px] text-[14px] bg-[#f5f9ff] p-[37px]">
          <InfoForm />
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage
