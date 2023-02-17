import "./Schedule.css";
import Match from "../../components/Match";

const Schedule = ({ data }) => {
  return (
    <div className="Schedule">
      <div className="schedule container">
        <h1>League Schedule</h1>

        <table className="matches-table">
          <thead className="table-head">
            <tr>
              <th>Date/Time</th>
              <th>Stadium</th>
              <th>Home Team</th>
              <th></th>
              <th>Away Team</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) &&
              data.map((elem, index) => {
                return <Match key={index} data={elem} />;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
