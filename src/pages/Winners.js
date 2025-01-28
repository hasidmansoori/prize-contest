import React, { useState, useEffect } from "react";
import axios from "axios";

const winners = [
    {
      id: "1",
      name: "Ahmed Ali",
      picture: "https://www.karachiliteraturefestival.com/wp-content/uploads/2022/02/Ahmed-Ali-Akbar.png", // Static image URL
      testimonial: "I'm so happy to win! This is the best prize ever!",
    },
    {
      id: "2",
      name: "Sara Mohammed",
      picture: "https://www.reedsmith.com/-/media/images/professionals/m/mohammed-sara/highresolutionimage/mohammeds300.jpg?rev=cd7ee3227ff14551a33d7174bf5b618c&hash=54D3EE3485BC31679B61C1D77453BF62", // Static image URL
      testimonial: "Thank you so much for this amazing prize! Totally worth it.",
    },
    {
      id: "3",
      name: "Omar Hassan",
      picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2_N3CyjlYhmDYPipwOIzllwBA_qLDqMqGNw&s", // Static image URL
      testimonial: "I can't believe I won! This contest is amazing.",
    },
  ];

const Winners = ({ language }) => {
//   const [winners, setWinners] = useState([]);

//   useEffect(() => {
//     // Fetch winners
//     axios.get("http://localhost:5000/api/winners")
//       .then((response) => {
//         setWinners(response.data);
//       })
//       .catch((error) => console.log(error));
//   }, []);

  return (
    <div>
      <h1>{language === "en" ? "Winners" : "الفائزون"}</h1>
      <ul>
        {winners.map((winner) => (
          <li key={winner._id}>
            <img src={winner.picture} alt={winner.name} 
            style={{ width: '200px', height: '200px' }}/>
            <p>{winner.name}</p>
            <p>{winner.testimonial}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Winners;
