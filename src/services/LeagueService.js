/**
 * A class representing a service that processes the data for match schedule
 * and generates leaderboard.
 *
 * NOTE: MAKE SURE TO IMPLEMENT ALL EXISITNG METHODS BELOW WITHOUT CHANGING THE INTERFACE OF THEM,
 *       AND PLEASE DO NOT RENAME, MOVE OR DELETE THIS FILE.
 *
 */
class LeagueService {
  /**
   * Sets the match schedule.
   * Match schedule will be given in the following form:
   * [
   *      {
   *          matchDate: [TIMESTAMP],
   *          stadium: [STRING],
   *          homeTeam: [STRING],
   *          awayTeam: [STRING],
   *          matchPlayed: [BOOLEAN],
   *          homeTeamScore: [INTEGER],
   *          awayTeamScore: [INTEGER]
   *      },
   *      {
   *          matchDate: [TIMESTAMP],
   *          stadium: [STRING],
   *          homeTeam: [STRING],
   *          awayTeam: [STRING],
   *          matchPlayed: [BOOLEAN],
   *          homeTeamScore: [INTEGER],
   *          awayTeamScore: [INTEGER]
   *      }
   * ]
   *
   * @param {Array} matches List of matches.
   */
  setMatches(matches) {
    this.matches = matches;
  }

  /**
   * Returns the full list of matches.
   *
   * @returns {Array} List of matches.
   */
  getMatches() {
    return this.matches;
  }

  /**
   * Returns the leaderboard in a form of a list of JSON objecs.
   *
   * [
   *      {
   *          teamName: [STRING]',
   *          matchesPlayed: [INTEGER],
   *          goalsFor: [INTEGER],
   *          goalsAgainst: [INTEGER],
   *          points: [INTEGER]
   *      },
   * ]
   *
   * @returns {Array} List of teams representing the leaderboard.
   */
  getLeaderboard() {
    return [
      {
        teamName: "Brazil",
        matchesPlayed: 3,
        goalsFor: 8,
        goalsAgainst: 4,
        points: 7,
      },
      {
        teamName: "Cameroon",
        matchesPlayed: 3,
        goalsFor: 7,
        goalsAgainst: 6,
        points: 5,
      },
      {
        teamName: "Switzerland",
        matchesPlayed: 3,
        goalsFor: 4,
        goalsAgainst: 7,
        points: 2,
      },
      {
        teamName: "Serbia",
        matchesPlayed: 3,
        goalsFor: 2,
        goalsAgainst: 4,
        points: 1,
      },
    ];
  }

  // teamName: [STRING],
  // matchesPlayed: [INTEGER],
  // goalsFor: [INTEGER],
  // goalsAgainst: [INTEGER],
  // points: [INTEGER],

  /**
   * Asynchronic function to fetch the data from the server.
   */
  async fetchData(axios, set) {
    try {
      const responseToken = await axios.get(
        `http://localhost:3001/api/v1/getAccessToken`
      );

      const token = responseToken.data.access_token;

      const responseData = await axios.get(
        `http://localhost:3001/api/v1/getAllMatches`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      set(responseData.data.matches);
      return "ok";
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default LeagueService;
