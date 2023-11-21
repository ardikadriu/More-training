const Firstcontainer = () => {
  return (
    <div className="w-[361px] h-[165px]  bg-white flex flex-col justify-center rounded-[12px]">
      <h3 className="ml-[24px] font-semibold leading-normal ">
        Your reservation
      </h3>
      <div className="flex ml-[24px] mt-[24px]">
        <div className="w-[108px] h-[72px] bg-[#DDD] rounded-[12px] shrink-0"></div>
        <div className="ml-[16px] shrink-0">
          <h1 className="text-[12px] text-[#C13515] font-semibold">Canceled</h1>
          <h4 className="text-[16px] font-semibold">tiny house, tiny farm</h4>
          <p className="text-[12px] text-[#222]">
            Reservation code: XMPQKAPZ6D
          </p>
        </div>
      </div>
    </div>
  );
};

export default Firstcontainer;
