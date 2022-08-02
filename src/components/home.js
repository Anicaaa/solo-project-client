import React from "react";
import PeopleList from "../db/peopleList";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

const HomePage = () => {
  const [data, setData] = useState(PeopleList);
  const [search, setSearch] = useState("");
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  });

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

  const handleLogout = () => {
    localStorage.removeItem("token");
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
        <a className="logout-btn" href="/" onClick={handleLogout}>
          Logout
        </a>
      </section>
      <section className="main-page">
        <div className="filter-section">
          <div className="filter-city">
            <h3>City</h3>
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
          </div>
          <div className="filter-lang">
            <h3>Language</h3>
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
          </div>
          <div className="filter-reason">
            <h3>Reason</h3>
            <button className="btn" onClick={() => filterResultReason("Work")}>
              Work
            </button>
            <button className="btn" onClick={() => filterResultReason("Study")}>
              Study
            </button>
            <button
              className="btn"
              onClick={() => filterResultReason("Personal")}
            >
              Personal
            </button>
          </div>
          <button className="reset-btn" onClick={() => setData(PeopleList)}>
            Reset
          </button>
        </div>
        <div className="center-wrapper react-spinner">
          {loading ? (
            <SyncLoader color={"#2d3065"} loading={loading} size={30} />
          ) : (
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
                        View Profile
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;
