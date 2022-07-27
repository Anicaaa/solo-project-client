import React from "react";
import PeopleList from "../db/peopleList";
import { useState } from "react";

const HomePage = () => {
  const [data, setData] = useState(PeopleList);

  const filterResult = (people) => {
    const result = PeopleList.filter((p) => {
      return p.city === people;
    });
    setData(result);
  };

  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col">
            <h1 className="title">Where Next?</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn" onClick={() => setData(PeopleList)}>
              <strong>All</strong>
            </button>
            <button className="btn" onClick={() => filterResult("Brighton")}>
              Brighton
            </button>
            <button className="btn" onClick={() => filterResult("Cambridge")}>
              Cambridge
            </button>
            <button className="btn" onClick={() => filterResult("Edinburgh")}>
              Edinburgh
            </button>
            <button className="btn" onClick={() => filterResult("Glasgow")}>
              Glasgow
            </button>
            <button className="btn" onClick={() => filterResult("London")}>
              London
            </button>
            <button className="btn" onClick={() => filterResult("Nottingham")}>
              Nottingham
            </button>
            <button className="btn" onClick={() => filterResult("Oxford")}>
              Oxford
            </button>
          </div>
          <div className="col">
            <div className="cards">
              {data.map((values) => {
                const { id, name, position, image } = values;
                return (
                  <>
                    <div className="card" key={id}>
                      <div className="card-header">
                        <img src={image} alt={name} />
                      </div>
                      <div className="card-body">
                        <h2 className="titleProduct">{name}</h2>
                        <p className="position">
                          <strong>Position: </strong>
                          {position}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
