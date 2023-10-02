import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import rectangle from "../../../assets/Rectangle.png";
import { Link, useLocation } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';

const AmountToPay = () => {
  const location = useLocation();
  const [amount, setAmount] = React.useState(0);
  const { state } = location;
  console.log("state in amount :>> ", state.friend);

  const makePayment = async () => {
    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_KEY);

    const body = {
      amount: amount * 100,
      email: state.friend.email,
      currency: "usd"
    }
    const headers = {
      "Content-Type": "application/json"
    }
    const response = await fetch("http://localhost:4000/api/v1/create-checkout-session", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id
    });

    if (result.error) {
      console.log(result.error);
    }
  }


  return (
    <div className="bg-white p-4 md:p-8 lg:p-12 xl:p-16">
      <div className="flex justify-between items-center">
        <Link to="/pay" style={{ textDecoration: 'none' }}>
          <h2 className="text-blueButtonColor flex items-center font-medium text-base">
            <MdOutlineArrowBackIosNew />
            <span className="ml-2">Back</span>
          </h2>
        </Link>
        <h2 className="text-blueButtonColor font-medium text-base">Cancel</h2>
      </div>

      <div className="flex flex-col items-center pt-6">
        <img
          src={state?.friend.profile_img}
          alt="User Avatar"
          className="w-16  md:w-32 md:h-32 xl:w-48 xl:h-48 rounded-full"
        />
        <h2 className="text-textColorBlack font-medium text-lg md:text-xl xl:text-2xl mt-4">{`${state.friend.firstName} ${state.friend.lastName} `}</h2>
        <h2 className="text-[#817F80] font-normal text-sm">
          {state?.friend?.username}
        </h2>

        <div className="pt-3">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border border-[#C6C6C8] rounded-lg py-2 px-12 w-full"
            placeholder="Amount"
          />
          {/* <h2 className="text-textColorBlack font-medium text-2xl md:text-3xl xl:text-4xl">$10.00</h2> */}
        </div>

        <div className="relative mt-4">
          <input
            type="text"
            className="border border-[#C6C6C8] rounded-lg py-2 px-12 w-full"
            placeholder="What's it for?"
          />
        </div>
        <button onClick={makePayment} className="mt-4 w-full md:w-[260px] bg-blueButtonColor text-[white] font-medium py-2 rounded-lg">
          Pay
        </button>
      </div>
    </div>
  );
};

export default AmountToPay;
