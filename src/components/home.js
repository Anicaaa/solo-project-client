import React from "react";
import PeopleList from "../db/peopleList";
import { useState } from "react";

const HomePage = () => {
  const [data, setData] = useState(PeopleList);
  const [search, setSearch] = useState("");

  const filterResultCity = (people) => {
    const result = PeopleList.filter((p) => {
      return p.city === people;
    });
    setData(result);
  };

  const filterResultLanguage = (people) => {
    const result = PeopleList.filter((p) => {
      return p.lang === people;
    });
    setData(result);
  };

  const filterResultReason = (people) => {
    const result = PeopleList.filter((p) => {
      return p.reason === people;
    });
    setData(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filter = PeopleList.filter((val) =>
      val.city.toLowerCase().includes(search)
    );
    setData(filter);
  };

  return (
    <>
      <section className="top-bar">
        <h1 className="title">Where Next?</h1>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <a href="/">Logout</a>
      </section>

      <section className="main-page">
        <div className="filter-section">
          <div className="filter-city">
            <h3>City</h3>
            <label>
              <input
                className="input-checkbox"
                type="checkbox"
                name="Brighton"
                value="Brighton"
                onClick={() => filterResultCity("Brighton")}
              ></input>
              Brighton
            </label>
            <label>
              <input
                className="input-checkbox"
                type="checkbox"
                name="Cambridge"
                value="Cambridge"
                onClick={() => filterResultCity("Cambridge")}
              ></input>
              Cambridge
            </label>
            <label>
              <input
                className="input-checkbox"
                type="checkbox"
                name="Edinburgh"
                value="Edinburgh"
                onClick={() => filterResultCity("Edinburgh")}
              ></input>
              Edinburgh
            </label>
            <label>
              <input
                className="input-checkbox"
                type="checkbox"
                name="Glasgow"
                value="Glasgow"
                onClick={() => filterResultCity("Glasgow")}
              ></input>
              Glasgow
            </label>
            <label>
              <input
                className="input-checkbox"
                type="checkbox"
                name="London"
                value="London"
                onClick={() => filterResultCity("London")}
              ></input>
              London
            </label>
            <label>
              <input
                className="input-checkbox"
                type="checkbox"
                name="Nottingham"
                value="Nottingham"
                onClick={() => filterResultCity("Nottingham")}
              ></input>
              Nottingham
            </label>
            <label>
              <input
                className="input-checkbox"
                type="checkbox"
                name="Oxford"
                value="Oxford"
                onClick={() => filterResultCity("Oxford")}
              ></input>
              Oxford
            </label>
          </div>
          <div className="filter-lang">
            <h3>Language</h3>
            <label>
              <input
                className="input-checkbox"
                type="checkbox"
                name="Arabic"
                value="Arabic"
                onClick={() => filterResultLanguage("Arabic")}
              ></input>
              Arabic
            </label>
            <label>
              <input
                className="input-checkbox"
                type="checkbox"
                name="Mandarin"
                value="Mandarin"
                onClick={() => filterResultLanguage("Mandarin")}
              ></input>
              Mandarin
            </label>
            <label>
              <input
                className="input-checkbox"
                type="checkbox"
                name="English"
                value="English"
                onClick={() => filterResultLanguage("English")}
              ></input>
              English
            </label>
            <label>
              <input
                className="input-checkbox"
                type="checkbox"
                name="Hindi"
                value="Hindi"
                onClick={() => filterResultLanguage("Hindi")}
              ></input>
              Hindi
            </label>
            <label>
              <input
                className="input-checkbox"
                type="checkbox"
                name="Spanish"
                value="Spanish"
                onClick={() => filterResultLanguage("Spanish")}
              ></input>
              Spanish
            </label>
          </div>
          <div className="filter-reason">
            <h3>Reason</h3>
            <label>
              <input
                className="input-checkbox"
                type="checkbox"
                name="Work"
                value="Work"
                onClick={() => filterResultReason("Work")}
              ></input>
              Work
            </label>
            <label>
              <input
                className="input-checkbox"
                type="checkbox"
                name="Study"
                value="Study"
                onClick={() => filterResultReason("Study")}
              ></input>
              Study
            </label>

            <label>
              <input
                className="input-checkbox"
                type="checkbox"
                name="Personal"
                value="Personal"
                onClick={() => filterResultReason("Personal")}
              ></input>
              Personal
            </label>
          </div>
          <button className="reset-btn" onClick={() => setData(PeopleList)}>
            RESET
          </button>
        </div>

        <div className="center-wrapper">
          <div className="cards">
            {data.map((values) => {
              const { id, name, position, image } = values;
              return (
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
                    <a href="/profile" className="main-btn">
                      Read More
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
