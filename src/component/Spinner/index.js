const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-30 mt-30">
      <div style={{

        borderLeftColor: '#1a73e8',
      }}  className=" border-4 border-[#626060]   border-opacity-10  rounded-full w-40 h-40 animate-spin"></div>
    </div>
  );
};

export default Spinner;