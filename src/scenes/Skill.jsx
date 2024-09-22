function Skill ({ name , icon}) {
  return (
    <div className="bg-gray-200 bg-gradient-to-tr from-stone-300 text-black text-sm font-bold mx-2 my-1 px-4 py-2 rounded-full shadow flex flex-row">
      
      <div className="flex items-center">
        <p>{name}</p>
      </div>
      
      <div className="text-2xl pl-1.5 flex self-center">
        {icon}
      </div>
      
    </div>
  );
}

export default Skill;