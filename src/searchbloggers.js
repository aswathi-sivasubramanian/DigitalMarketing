import React from "react";
import { Link } from "react-router-dom";
const channels = [
  {
    id: 1,
    channelName: "PewDiePie",
    youtubeLink: "https://www.youtube.com/user/PewDiePie",
    numOfViews: 8000000,
    numOfSubscribers: 110000000,
  },
  {
    id: 2,
    channelName: "T-Series",
    youtubeLink: "https://www.youtube.com/user/tseries",
    numOfViews: 6000000,
    numOfSubscribers: 180000000,
  },
  {
    id: 3,
    channelName: "MrBeast",
    youtubeLink: "https://www.youtube.com/user/MrBeast6000",
    numOfViews: 7000000,
    numOfSubscribers: 59000000,
  },
  {
    id: 4,
    channelName: "Dude Perfect",
    youtubeLink: "https://www.youtube.com/user/corycotton",
    numOfViews: 5000000,
    numOfSubscribers: 56000000,
  },
  {
    id: 5,
    channelName: "Shane Dawson TV",
    youtubeLink: "https://www.youtube.com/user/shane",
    numOfViews: 4000000,
    numOfSubscribers: 23300000,
  },
  {
    id: 6,
    channelName: "Good Mythical Morning",
    youtubeLink: "https://www.youtube.com/user/rhettandlink2",
    numOfViews: 3500000,
    numOfSubscribers: 17400000,
  },
  {
    id: 7,
    channelName: "Markiplier",
    youtubeLink: "https://www.youtube.com/user/markiplierGAME",
    numOfViews: 2000000,
    numOfSubscribers: 31000000,
  },
  {
    id: 8,
    channelName: "James Charles",
    youtubeLink: "https://www.youtube.com/user/jamescharles",
    numOfViews: 1000000,
    numOfSubscribers: 25000000,
  },
  {
    id: 9,
    channelName: "Jeffree Star",
    youtubeLink: "https://www.youtube.com/user/jeffreestar",
    numOfViews: 1500000,
    numOfSubscribers: 18000000,
  },
  {
    id: 10,
    channelName: "Zoella",
    youtubeLink: "https://www.youtube.com/user/zoella280390",
    numOfViews: 900000,
    numOfSubscribers: 12000000,
  },
  {
    id: 11,
    channelName: "Miranda Sings",
    youtubeLink: "https://www.youtube.com/user/mirandasings08",
    numOfViews: 3000000,
    numOfSubscribers: 11000000,
  },
  {
    id: 12,
    channelName: "Tyler Oakley",
    youtubeLink: "https://www.youtube.com/user/tyleroakley",
    numOfViews: 800000,
    numOfSubscribers: 7300000,
  },
];
console.log(channels);
const searchbloggers = () => {
  return (
    <div className="card-list">
      {channels.map((item) => (
        <div className="card" key={item.id}>
          <p>{item.id}</p>
          <p>
            <span className="bold">ChannelName:</span>
            {item.channelName}
          </p>
          <a href={item.youtubeLink}>Youtube Link</a>
          <span>
            {" "}
            <span className="bold">ViewCount:</span>
            {item.numOfViews}
          </span>
          <span>
            {" "}
            <span className="bold">SubscribersCount:</span>
            {item.numOfSubscribers}
          </span>
          <button>Book Now</button>
        </div>
      ))}
    </div>
  );
};
export default searchbloggers;

// import React from "react";
// // import React from "react";
// // import "./App.css";

// // const App = ({ cards }) => (
// //     <React.Fragment>
// //         {cards.map(({ title, subtitle }, index) => (
// //             <div className="card" key={index}>
// //                  id: 1,
// //     channelName: "PewDiePie",
// //     youtubeLink: "https://www.youtube.com/user/PewDiePie",
// //     numOfViews: 8000000,
// //     numOfSubscribers: 110000000,
// //                 <span>{title}</span>
// //                 <br />
// //                 <span>{subtitle}</span>
// //                 <br />
// //             </div>
// //         ))}
// //     </React.Fragment>
// // )

// // export default App;
// // const Searchbloggers = () => {
// //   return <div>Searchbloggers</div>;
// // };

// // export default Searchbloggers;
