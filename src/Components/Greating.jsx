// import "/assets/css/style.css";
import React from "react";

export default function Greeting({ name }) {
  return (
    <div>
      <h1 className="  ">Hello, {name}!</h1>
      <p>Welcome to our Astro + React site!</p>
    </div>
  );
}
