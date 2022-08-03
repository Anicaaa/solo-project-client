import React from "react";

const Book = () => {
  return (
    <>
      <form action="/done.js" className="book-box">
        <h1 className="book-title">Book Here</h1>
        <input
          className="input-book-box"
          type="text"
          id="fname"
          name="fname"
          placeholder="Full Name"
          required
        ></input>
        <input
          className="input-book-box"
          type="email"
          id="email"
          name="email"
          placeholder="test@test.com"
          required
        ></input>
        <input
          className="input-book-box"
          type="date"
          id="free"
          name="meeting-date"
          min="2022-01-01"
          max="2022-12-31"
          required
        ></input>
        <select className="input-book-box" name="time" id="time" required>
          <option value="">Choose Time</option>
          <option value="ten">10:00</option>
          <option value="eleven">11:00</option>
          <option value="twelve">12:00</option>
          <option value="fourteen">14:00</option>
          <option value="fifteen">15:00</option>
        </select>
        <input
          className="input-message input-book-box"
          placeholder="Your message here..."
          type="text"
          name="message"
          id="message"
        ></input>
        <button className="submit-btn" href="/done" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Book;
