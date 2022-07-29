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
      <main className="container">
        <section className="row">
          <div className="col">
            <h1 className="title">Where Next?</h1>
            <form className="search-form" onSubmit={handleSubmit}>
              <input
                className="search-bar"
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
        </section>
        <div className="row">
          <div className="col">
            <button className="btn" onClick={() => setData(PeopleList)}>
              <strong>City</strong>
            </button>
            <button
              className="btn"
              onClick={() => filterResultCity("Brighton")}
            >
              Brighton
            </button>
            <button
              className="btn"
              onClick={() => filterResultCity("Cambridge")}
            >
              Cambridge
            </button>
            <button
              className="btn"
              onClick={() => filterResultCity("Edinburgh")}
            >
              Edinburgh
            </button>
            <button className="btn" onClick={() => filterResultCity("Glasgow")}>
              Glasgow
            </button>
            <button className="btn" onClick={() => filterResultCity("London")}>
              London
            </button>
            <button
              className="btn"
              onClick={() => filterResultCity("Nottingham")}
            >
              Nottingham
            </button>
            <button className="btn" onClick={() => filterResultCity("Oxford")}>
              Oxford
            </button>
            <div className="language-li">
              <button className="btn" onClick={() => setData(PeopleList)}>
                <strong>Language</strong>
              </button>
              <button
                className="btn"
                onClick={() => filterResultLanguage("Arabic")}
              >
                Arabic
              </button>
              <button
                className="btn"
                onClick={() => filterResultLanguage("Mandarin")}
              >
                Mandarin
              </button>
              <button
                className="btn"
                onClick={() => filterResultLanguage("English")}
              >
                English
              </button>
              <button
                className="btn"
                onClick={() => filterResultLanguage("Hindi")}
              >
                Hindi
              </button>
              <button
                className="btn"
                onClick={() => filterResultLanguage("Spanish")}
              >
                Spanish
              </button>
              <div className="language-li">
                <button className="btn" onClick={() => setData(PeopleList)}>
                  <strong>Reason</strong>
                </button>
                <button
                  className="btn"
                  onClick={() => filterResultReason("Work")}
                >
                  Work
                </button>
                <button
                  className="btn"
                  onClick={() => filterResultReason("Study")}
                >
                  Study
                </button>
                <button
                  className="btn"
                  onClick={() => filterResultReason("Personal")}
                >
                  Personal
                </button>
              </div>
            </div>
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
