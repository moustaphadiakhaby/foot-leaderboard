import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Leaderboard from "./pages/Leaderboard";
import Schedule from "./pages/Schedule";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
import { useState, useEffect } from "react";
import LeagueService from "./services/LeagueService";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [lead, setLead] = useState({});

  useEffect(() => {
    try {
      const leagueService = new LeagueService();
      leagueService.fetchData(axios, setData);
      leagueService.setMatches(data);
      setLead(leagueService.getLeaderboard());
    } catch (error) {
      console.log(error.message);
    }
  }, [data]);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Schedule data={data} />
            </Route>
            <Route exact path="/schedule">
              <Schedule data={data} />
            </Route>
            <Route exact path="/leaderboard">
              <Leaderboard data={lead} />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
