import "./Day2.css";
import line from "./line.png";
function Day2() {
  return (
    <div className="screen">
      <div className="container-1">
        <p>Checkout</p>
      </div>
      <div className="container-2">
        <p>Select your payment method</p>
        <div className="container-3">
          <div className="container-4 credit"></div>
          <div className="container-4 apple"></div>
          <div className="container-4 paypal"></div>
        </div>
        <p>Select your card</p>
        <div className="container-5">
          <div className="container-6"></div>
        </div>
        <div className="add-a-new-card">
          <p>Add a new card</p>
        </div>
        <img className="line" src={line} alt="" />
        <div className="summary">
          <p class="amount">
            Total amount<span class="money">$356.47</span>
          </p>
        </div>

        <button id="pay">Pay Now</button>
      </div>
    </div>
  );
}

export default Day2;
