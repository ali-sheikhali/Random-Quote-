import React, { useState } from "react";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        // console.log(response);
        const mainAdvice = response.data.slip.advice;
        setAdvice(mainAdvice);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-6/12 absolute mx-auto  transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className="flex flex-col justify-center bg-slate-600  rounded-md space-y-5 py-5">
        <p className="text-center py-4 text-white px-16">{advice}</p>
        <button className="bg-green-400 w-2/12 py-1 mx-auto text-white rounded-md" onClick={fetchAdvice}>
          advice
        </button>
      </div>
    </div>
  );
}

export default App;
