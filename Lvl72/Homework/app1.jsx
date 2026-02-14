import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <section>
      <h1>ჩემი სექცია</h1>
      <p>ეს არის მარტივი ტექსტი section-ის შიგნით.</p>

      <ul>
        <li>პუნქტი 1</li>
        <li>პუნქტი 2</li>
        <li>პუნქტი 3</li>
      </ul>

      <button>დააჭირე</button>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
