import React, { useState } from "react";
import logo from "./logo.svg";

function App() {
  const [length, setLength] = useState(8);
  const [breadth, setBreadth] = useState(4);
  const [unit, setUnit] = useState("ft");
  const blength_ft = 8;
  const bbreadth_ft = 4;
  const blength_m = 3;
  const bbreadth_m = 2
  return (
    <div className="App">
      <div class="bg-gray-200 border-b border-gray-300">
        <div class="max-w-screen-sm md:max-w-6xl mx-auto p-3 md:p-4">
          <div class="flex flex-col md:flex-row justify-between items-center md:items-end">
            <a class="w-1/2 md:w-1/6 justify-start" href="./">
              <img
                class="object-contain"
                src={logo}
                title="CoronaSafe: Corona Literacy Mission"
                alt="CoronaSafe Logo: Corona Literacy Mission"
              />
            </a>
            <p class="font-semibold text-sm text-center md:text-base mt-2 md:mt-0 text-gray-700">
              Corona Literacy Mission
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-2">
        <div className="mt-4 font-semibold text-5xl">Capacity Planner</div>
		<label for="unit">Choose a unit : </label>
		<select id="unit"
				defaultValue={unit}
				onChange={e => setUnit(e.target.value)}>
		  <option value="ft">ft</option>
		  <option value="m">m</option>
		</select>
        <div className="max-w-sm mt-4">
          <div className=" mt-4">
            <label htmlFor="length" className="text-sm font-semibold">
              Length
            </label>
            <input
              id="length"
              type="number"
              value={length}
              onChange={e => setLength(e.target.value)}
              className="appearance-none block text-sm w-full bg-white border border-gray-400 rounded px-4 py-2 my-2 leading-relaxed focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className=" mt-4">
            <label htmlFor="breadth" className="text-sm font-semibold">
              Breadth
            </label>
            <input
              id="breadth"
              type="number"
              value={breadth}
              onChange={e => setBreadth(e.target.value)}
              className="appearance-none block text-sm w-full bg-white border border-gray-400 rounded px-4 py-2 my-2 leading-relaxed focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className=" mt-4">Area: {length * breadth}</div>
		  <div className=" mt-4">Capacity: {unit==="ft" ? ((length - (length % blength_ft))*(breadth - (breadth % bbreadth_ft))/(blength_ft*bbreadth_ft)) : ((length - (length % blength_m))*(breadth - (breadth % bbreadth_m)))/(blength_m*bbreadth_m)}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
