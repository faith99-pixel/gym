import Detailingi from "../components/images/Detailingi.png";

const details = () => {
  return (
    <>
      <div className="container details">
        <div className="row">
          <div className="col-sm-5">
            <h6>There is No Tomorrow</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              quis ligula fringilla, facilisis ex sit amet, luctus orci. Donec
              nec nibh varius, imperdiet ante non, commodo ex. Maecenas posuere
              orci turpis, sit amet tempus magna imperdiet vitae. Aenean porta
              orci at dapibus lacinia. <br />
              <br /> Integer in risus ut nunc interdum convallis. Fusce vitae
              nunc imperdiet, dictum sem eu, facilisis mauris. Quisque luctus
              lobortis lobortis. In ornare arcu at lacus vestibulum rhoncus.
              Nulla quis velit non justo facilisis sollicitudin.
            </p>
            <button className="btn">View More</button>
          </div>
          <div className="offset-sm-2 col-sm-5">
            <img src={Detailingi} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default details;
