import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1761839259112-aaea03db3633?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="profile"
      />
      <h1>{props.name} 
        
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
    </div>
  );
}

export default Card;
