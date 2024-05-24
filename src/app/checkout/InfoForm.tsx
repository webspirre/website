"use client"

import React, { useState } from "react";
import Form1 from "./Form1";

function InfoForm() {
  const [activeTab, setActiveTab] = useState(1);

  const handleContinue = () => {
    setActiveTab(2);
  };

  const handleBack = () => {
    setActiveTab(1);
  };

  return (
    <div className="">
      <div className="">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-[16px]">Personal information</h1>
          {/* Continue button visible on Tab 1 and hidden on Tab 2 */}
          {activeTab === 1 && (
            <button
              onClick={handleContinue}
              className="py-[10px] px-[16px] bg-black text-white rounded-[14px]"
            >
              Continue
            </button>
          )}

          {/* Back and Pay buttons visible on Tab 2 */}
          {activeTab === 2 && (
            <div className="flex gap-2">
              <button
                onClick={handleBack}
                className="py-[10px] px-[16px] bg-black text-white rounded-[14px]"
              >
                Back
              </button>
              <button className="py-[10px] px-[16px] bg-black text-white rounded-[14px]">
                Pay $12.00
              </button>
            </div>
          )}
        </div>
        {/* Tab Bar */}
        <div className="flex gap-2 w-full">
          <div
            className={`flex w-[50%] h-[8px] rounded-full ${
              activeTab === 1 ? "bg-black" : "bg-[#555050] opacity-[40%]"
            }`}
          ></div>
          <div
            className={`flex w-[50%] h-[8px] rounded-full ${
              activeTab === 2 ? "bg-black" : "bg-[#555050] opacity-[40%]"
            }`}
          ></div>
        </div>

        <div>
          {/* Tab Content */}
          {activeTab === 1 && (
            <div>
              {/* Tab 1 */}
              <Form1 />
            </div>
          )}
          {activeTab === 2 && (
            <div>
              {/* Tab 2 */}
              detail form
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InfoForm;
