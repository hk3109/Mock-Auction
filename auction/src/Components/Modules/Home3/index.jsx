import { team_csk } from "../../utils/Teams/CSK";

const Home3 = () => {
  return (
    <div>
      <h2>{team_csk?.name}</h2>
      {team_csk?.sections?.map((section) => (
        <div key={section.role}>
          <h3>{section.role}</h3>
          {section.players?.map((player) => (
            <>
              <p key={player.id}>{player.name}</p>
              <img src={`${player?.image}`} alt="CSK Logo" />
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Home3;
