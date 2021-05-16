import * as React from "react";
import { render } from "react-dom";
import { Header } from "./Header";
import { CardList } from "./CardList";
import StarfieldAnimation from "react-starfield-animation";

import "./styles.css";

function App() {
  return (
    <div className="container">
        <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0
        }}
      />
        <Header />
        <CardList />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
