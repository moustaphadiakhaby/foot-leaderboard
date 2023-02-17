import "./Match.css";

const Match = ({ data }) => {
  const date = (valDate) => {
    const date = new Date(valDate);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return [day, month, year].join(".");
  };

  const time = (valTime) => {
    const timing = new Date(valTime);
    return timing.toLocaleTimeString("sv", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const homeFlag = `https://flagsapi.codeaid.io/${data.homeTeam}.png`;
  const awayFlag = `https://flagsapi.codeaid.io/${data.awayTeam}.png`;

  return (
    <tr>
      <td className="match-date">
        <span>{date(data.matchDate)}</span>
        <span>{time(data.matchDate)}</span>
      </td>
      <td className="match-stadium">
        <span>{data.stadium}</span>
      </td>
      <td className="team home">
        <span className="country-name bold">{data.homeTeam}</span>
        <img className="country-flag" src={homeFlag} alt="flag of country" />
      </td>
      <td>
        <p className="bold">
          {data.homeTeamScore} : {data.awayTeamScore}
        </p>
      </td>
      <td className="team">
        <img className="country-flag" src={awayFlag} alt="flag of country" />
        <span className="country-name bold">{data.awayTeam}</span>
      </td>
    </tr>
  );
};

export default Match;
