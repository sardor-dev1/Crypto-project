import React from "react";
import Hero from "../../components/hero";
import Main from "../../components/main";

export default function index({ value }) {
  return (
    <main>
      <Hero />
      <Main value={value} />
    </main>
  );
}
