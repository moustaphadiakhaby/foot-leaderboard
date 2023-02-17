import MatchScore from "../../components/MatchScore";
import "./Leaderboard.css";

const Leaderboard = ({ data }) => {
  return (
    <div className="Leaderboard">
      <div className="leaderboard container">
        <h1>League Standings</h1>

        <table className="matches-standings">
          <thead className="table-lead">
            <tr>
              <th>Team Name</th>
              <th>MP</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) &&
              data.map((elem, index) => {
                return <MatchScore data={elem} key={index} />;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
