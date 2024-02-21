import React, { useState } from "react";
import { bvm_demo } from "../data";
import BvmCard from "./bvmCard";

function filterData(searchText,bvm_demo){
  const filterData = bvm_demo.filter((department) =>
  department.department_short_name.toLowerCase().includes(searchText.toLowerCase())
);
return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const bvm_data = bvm_demo.sort((a, b) => a.rank - b.rank);

   const[departments,setDepartments] = useState(bvm_data)
  

  return (
    <div className="mt-10">
      <div className="flex items-center justify-center mb-6">
        <input
          type="text"
          className="border p-2 mr-2"
          placeholder="Search a department you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-4"
        onClick={()=>{
          const data = filterData(searchText,departments);
          setDepartments(data);
        }}>Search</button>
      </div>
      <div className="grid grid-cols-3  lg:grid-cols-4 xl:grid-cols-7 gap-4 mx-4 mt-20">
        {departments.map((department) => (
          <BvmCard key={department.department_id} {...department} />
        ))}
      </div>
    </div>
  );
};

export default Body;



