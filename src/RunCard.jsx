import propTypes from "prop-types";

function RunCard({ title, startedOn, completedOn, location, miles }) {
  return (
    <div className="run-container">
      <div className="run-title-container">
        <h1 className="run-title">{title}</h1>
      </div>
      <div className="run-time-container">
        <div className="run-started-on-container">
          <h3 className="run-started-on">{startedOn}</h3>
        </div>
        <div className="run-completed-on-container">
          <h3 className="run-completed-on">{completedOn}</h3>
        </div>
      </div>
      <div className="run-location-container">
        <h3 className="run-location">{location}</h3>
      </div>
      <div className="run-distance-container">
        <h2 className="run-distance">
          <span id="run-miles">{miles}</span> miles ran
        </h2>
        <div className="run-ranking-container">
          <h3 className="run-ranking">Personal Best!</h3>
        </div>
      </div>
    </div>
  );
}

RunCard.propTypes = {
  title: propTypes.string,
  startedOn: propTypes.string,
  completedOn: propTypes.string,
  location: propTypes.string,
  miles: propTypes.string,
};

export default RunCard;
