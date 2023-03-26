import React, { useEffect, useState } from "react";
import Button from "../BUTTON/Button";
import Modal from "../MODAL/Modal";
import SingleData from "../SINGLEDATA/SingleData";

const Card = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [uniqueID, setUniqueId] = useState(null);
  const [singleData, setSingleData] = useState({});
  //   console.log(uniqueID);
  const btnSeeMore = () => {
    setShowAll(true);
  };
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueID}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data.data));
  }, [uniqueID]);
  console.log(singleData);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
      );
      const value = await response.json();
      setData(value.data.tools);
    };
    loadData();
  }, []);

  return (
    <>
      <div className=" lg:px-11 gap-3 mt-4 grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3">
        {data.slice(0, showAll ? 12 : 6).map((singleData) => (
          <SingleData
            key={singleData.id}
            singleData={singleData}
            setUniqueId={setUniqueId}
          ></SingleData>
        ))}
      </div>
      {!showAll && (
        <span onClick={btnSeeMore}>
          <Button>See More</Button>
        </span>
      )}
      <Modal></Modal>
    </>
  );
};

export default Card;
