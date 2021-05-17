import * as React from "react";
import { Card } from "./Card";
import { CardData } from "./types";
import { BrowserRouter as Router, Route } from "react-router-dom";

const List = ({ match, history }) => (
  <ul className="card-list">
    {cardData.map(card => (
      <Card
        key={card.id}
        isSelected={match.params.id === card.id}
        history={history}
        {...card}
      />
    ))}
  </ul>
);

export const CardList = () => (
  <Router>
    <Route path={["/:id", "/"]} component={List} />
  </Router>
);

const cardData: CardData[] = [
  {
    id: "venkat",
    category: "Dude",
    title: "Venkat, the K-Pop Guy",
    pointOfInterest: 200,
    description: "Classic K-pop fan/Part-time Introvert",
    backgroundColor: "#ff0a54",
    title_theme: 'light'
  },
  {
    id: 'amar',
    category: 'Confusement',
    title: "I am Amar, I think...",
    description: "No",
    backgroundColor: "#fe5439f",
    pointOfInterest: 400,
    title_theme: 'dark'
  },
  {
    id: 'aravind',
    category: 'Lmao ded',
    title: 'Aravind, musician/beatboxer',
    description: 'Dhushyanth is holding me hostage, and forcing me to write this... SOS',
    backgroundColor: '#238476',
    pointOfInterest: 50,
    title_theme: 'dark'
  },
  {
    id: 'ananthu',
    category: 'TWSS',
    title: 'Ananthajit, Walking Zombie/Data Scientist',
    description: 'You still owe those blender models you know...',
    backgroundColor: '#000',
    pointOfInterest: 0,
    title_theme: 'light'
  }
];
