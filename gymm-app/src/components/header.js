import Imagehead from "../components/images/Imagehead.jpg";

const header = () => {
  return (
    <>
      <section>
        <div className="header">
          <div>
            <div className="img">
              <img src={Imagehead} alt="" />
            </div>
            <div className="Overlay"></div>
          </div>
          <div className="Content">
            <h6>Build Your Fitness World <br /> By Building Your Body</h6>
            <button className="btn">Join Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default header;
