import React from "react";

export default function Home() {
  return (
    <div className="d-flex flex-gap-20 padding-sm text-align-left">
      <div className="home-img">
        <img src="https://www.journohq.com/blog/wp-content/uploads/2018/05/Travel-Buddy-Title-600x600.jpeg" alt=""/>
      </div>
      <div className="d-flex flex-col align-items-start flex-gap-20" style={{flex: "1"}}>
        <div>
          <div><b>Welcome to Travel Buddy! 🚀</b></div> 
          <div> Your ultimate travel companion to plan seamless journeys!</div>
          <div>Effortlessly book your travel details from one place
          to another with ease. Whether it’s a business trip or a getaway, Travel
          Buddy ensures a smooth booking experience tailored to your needs. </div>
        </div>
        <div>
          <div><b>🌟 Why Travel Buddy?</b></div>
          <div>
            <ul className="">
                <li>Easy-to-use interface for hassle-free booking.</li>
                <li>Compare travel options and choose the best fit. </li>
                <li>Secure payment gateways for worry-free transactions. </li>
                <li>Real-time updates on your bookings and schedules.</li>
            </ul> 
          </div>  
        </div>
        <div>
          <div>Ready to make your journey unforgettable?</div> 
          <div><b>Let’s Get Started!</b></div>  
        </div>
      </div>
    </div>
  );
}
