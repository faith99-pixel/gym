import Workout from "../components/images/Workout.jpg";
import Girl from "../components/images/Girl.jpg";
import Exercise from "../components/images/Exercise.jpg";

const custom = () => {
  return (
    <>
      <section>
        <div className="custom container">
          <div className="row">
            <div className="col-sm-4">
              <div className="box">
                <img src={Workout} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-sm-4">
              <div className="box">
                <img src={Girl} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-sm-4">
              <div className="box">
                <img src={Exercise} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default custom;
