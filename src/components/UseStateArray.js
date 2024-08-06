import React, { useState } from "react";

const UseStateArray = () => {
  const bioData = [
    {
      id: 0,
      myName: "Abhay",
      age: 26,
    },
    {
      id: 1,
      myName: "Kumar",
      age: 27,
    },
    {
      id: 2,
      myName: "Sah",
      age: 28,
    },
  ];
  const [myArray, setMyArray] = useState(bioData);

  const clearData = () => {
    setMyArray([]);
  };

  const removeContent = (id) => {
    const myNewArray = myArray.filter((e) => {
      return e.id !== id;
    });

    setMyArray(myNewArray);
  };
  return (
    <>
      {myArray.map((e) => {
        return (
          <h1 className="ArrayBar" key={e.id}>
            Name:{e.myName} & Age:{e.age}
            <button className="btnInner" onClick={() => removeContent(e.id)}>
              remove
            </button>
          </h1>
        );
      })}
      <button className="button" onClick={clearData}>
        Clear
      </button>
    </>
  );
};

export default UseStateArray;
