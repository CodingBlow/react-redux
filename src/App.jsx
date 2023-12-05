import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, incByFive, decByFive } from "./actions/index";

function App() {
  const digit = useSelector((state) => {
    return state.changeNumber;
  });

  const dispatch = useDispatch();
  return (
    <>
      <div className="sm:my-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Increment/Decrement Counter by 1 <br />( Only 0 - 50 )
        </h1>
        <div className="input-group sm:ml-10 flex items-center justify-center flex-row bg-white rounded-lg shadow-md max-w-[360px]">
          <button
            id="decrement"
            onClick={() => dispatch(decNumber())}
            className="p-4 text-xl sm:text-2xl md:text-3xl rounded-l-md focus:outline-none transition duration-300 hover:bg-gray-300 active:shadow-inner"
          >
            -
          </button>
          <input
            type="number"
            id="input"
            value={digit}
            readOnly
            className="p-4 text-2xl sm:text-3xl md:text-4xl text-center w-full"
          />
          <button
            onClick={() => dispatch(incNumber())}
            id="increment"
            className="p-4 text-xl sm:text-2xl md:text-3xl rounded-r-md focus:outline-none transition duration-300 hover:bg-gray-300 active:shadow-inner"
          >
            +
          </button>
        </div>
      </div>

      {/* End */}
      <br />

      <div className="sm:my-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Increment/Decrement Counter by 5 <br />( Only 0 - 50 )
        </h1>
        <div className="input-group sm:ml-10 flex items-center justify-center flex-row bg-white rounded-lg shadow-md max-w-[360px]">
          <button
            id="decrement"
            onClick={() => dispatch(decByFive(5))}
            className="p-4 text-xl sm:text-2xl md:text-3xl rounded-l-md focus:outline-none transition duration-300 hover:bg-gray-300 active:shadow-inner"
          >
            -
          </button>
          <input
            type="number"
            id="input"
            value={digit}
            readOnly
            className="p-4 text-2xl sm:text-3xl md:text-4xl text-center w-full"
          />
          <button
            onClick={() => dispatch(incByFive(5))}
            id="increment"
            className="p-4 text-xl sm:text-2xl md:text-3xl rounded-r-md focus:outline-none transition duration-300 hover:bg-gray-300 active:shadow-inner"
          >
            +
          </button>
        </div>
      </div>

      <p className="mb-8 ml-5 text-xl text-red-800 font-bold sm:mr-10 ">
       ***** Created by React Redux *****
      </p>
    </>
  );
}

export default App;
