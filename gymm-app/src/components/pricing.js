import React from "react";

const pricing = () => {
  return (
    <>
      <div className="pricing container">
        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <h6>Basic</h6>
              <h5>$101</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus quis ligula fringilla, facilisis ex sit amet, luctus
                orci. Donec nec nibh varius, imperdiet ante non, commodo ex.
              </p>
              <button className="btn">Buy Now</button>
            </div>
          </div>

          <div className="col-sm-4 mid">
            <div className="box active">
              <h6>Advance</h6>
              <h5>$201</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus quis ligula fringilla, facilisis ex sit amet, luctus
                orci. Donec nec nibh varius, imperdiet ante non, commodo ex.
              </p>
              <button className="btn">Buy Now</button>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <h6>Premium</h6>
              <h5>$301</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus quis ligula fringilla, facilisis ex sit amet, luctus
                orci. Donec nec nibh varius, imperdiet ante non, commodo ex.
              </p>
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default pricing;
