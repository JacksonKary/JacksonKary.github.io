function Divider() {
  return (
    <div className={`mx-auto w-full relative my-8 flex justify-center items-center`}>
      <div className={`absolute w-full h-0.5 bg-gradient-to-r from-stone-300 via-stone-500 to-stone-300`}></div>
      <div className={`w-1.5 h-1.5 rounded-full bg-stone-500 absolute left-0`}></div>
      <div className={`w-1.5 h-1.5 rounded-full bg-stone-500 absolute right-0`}></div>
    </div>
  );
}

export default Divider;