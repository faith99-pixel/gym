import Team1 from "../components/images/Teams1.jpg";
import Team2 from "../components/images/Teams2.jpg";
import Team3 from "../components/images/Teams3.jpg";
const teams = () => {
  return (
    <>
      <section>
        <div className="teams container">
          <div className="row">
            <div className="col-sm-4">
              <div className="box">
                <img src={Team1} className="img-fluid" alt="" />
                <div className="content">
                  <h6>Easy Gym Team</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box">
                <img src={Team2} className="img-fluid" alt="" />
                <div className="content">
                  <h6>Easy Gym Team</h6>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="box">
                <img src={Team3} className="img-fluid" alt="" />
                <div className="content">
                  <h6>Easy Gym Team</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default teams;
