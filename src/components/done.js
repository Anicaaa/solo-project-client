import React from "react";
import { useState, useEffect } from "react";
import SyncLoader from "react-spinners/SyncLoader";

const Done = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <SyncLoader
          className="react-spinner"
          color={"#2d3065"}
          loading={loading}
          size={30}
        />
      ) : (
        <div className="thankyou-box">
          <h1 className="done-box">Thank you for your booking!</h1>
          <img src="/images/check.png" alt="check"></img>
          <p className="done-box done-p">Your meeting has been submitted.</p>
        </div>
      )}
    </>
  );
};

export default Done;
