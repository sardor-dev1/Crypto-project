import React from "react";
import Hero from "../../components/hero";
import Main from "../../components/main";

export default function index({ value }) {
  return (
    <main>
      <Hero value={value}/>
      <Main value={value} />
    </main>
  );
}
