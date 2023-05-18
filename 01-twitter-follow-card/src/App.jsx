import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
const App = () => {

  return (
    <section className="App">
      <TwitterFollowCard  userName="gerorodriguez">
        Geronimo Rodriguez
      </TwitterFollowCard>
      <TwitterFollowCard userName="midudev">
         Miguel Angel Durann
      </TwitterFollowCard>
    </section>
  );
};
export default App;
