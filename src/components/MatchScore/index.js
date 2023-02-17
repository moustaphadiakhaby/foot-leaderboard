import "./MatchScore.css";

const MatchScore = ({ data }) => {
  const flag = `https://flagsapi.codeaid.io/${data.teamName}.png`;

  const goalDif = data.goalsFor - data.goalsAgainst;

  return (
    <tr>
      <td className="team">
        <img className="country-flag" src={flag} alt="flag of country" />
        <span className="country-name bold">{data.teamName}</span>
      </td>
      <td className="mp">{data.matchesPlayed}</td>
      <td className="gf">{data.goalsFor}</td>
      <td className="ga">{data.goalsAgainst}</td>
      <td className="gd">{goalDif}</td>
      <td className="points">{data.points}</td>
    </tr>
  );
};

export default MatchScore;
