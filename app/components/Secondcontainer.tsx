import React from "react";

const Secondcontainer = () => {
  return (
    <div className="flex h-[86px] bg-white items-center ml-[40px] rounded-[12px] pr-[24px] pl-[24px]">
      <h4 className="w-[261px]  ">
        <span className="font-semibold">This is a rare find.</span> Hope’s place{" "}
        <br />
        on Airbnb is usually fully booked.
      </h4>
      <svg
        width="32"
        height="31"
        viewBox="0 0 32 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.99852 3.07997L3.97562 10.6542L16.129 26.2235L28.0368 10.6542L21.8922 3.07997H9.99852Z"
          fill="#F6D7DF"
        />
        <path
          d="M30.183 10.8954L16.0041 29.8989L1.81739 10.8954L30.183 10.8954Z"
          stroke="#D03660"
          stroke-width="1.1916"
        />
        <path
          d="M1.01477 10.6351L9.19507 1.10497H22.4729L30.9977 10.6391"
          stroke="#D03660"
          stroke-width="1.1916"
        />
        <path
          d="M9.34042 1.29214L16.0111 30.0511L22.668 1.29214"
          stroke="#D03660"
          stroke-width="1.1916"
        />
      </svg>
    </div>
  );
};

export default Secondcontainer;
