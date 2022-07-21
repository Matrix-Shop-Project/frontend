import { Button } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

function Item({ item }) {
  return (
    <div style={{ width: "100%", height: "450px" }}>
      {
        <img
          src={item.url}
          alt=""
          style={{ width: "80%", margin: "0 10%" }}
        />
      }
      <br />
      {
        <Button
          variant="contained"
          style={{
            marginTop: "-550px",
            marginLeft: "250px",
          }}
        >
          {item.name}
        </Button>
      }
      <br />
      <p
        style={{
          marginTop: "-330px",
          marginLeft: "250px",
        }}
      >
        {item.description}
      </p>

    </div>
  );
}

export default function HomeCarousel() {
  var items = [
    {
      url: `https://cdn.pixabay.com/photo/2017/02/24/03/35/engagement-ring-2093824_960_720.jpg`,
      name: "Go to Product #1",
      description: "1 - Probably the most random thing you have ever seen!",
    },
    {
      url: `https://cdn.pixabay.com/photo/2017/02/24/03/35/engagement-ring-2093824_960_720.jpg`,
      name: "Go to Product #2",
      description: "2 - Probably the most random thing you have ever seen!",
    },
    {
      url: `https://cdn.pixabay.com/photo/2017/02/24/03/35/engagement-ring-2093824_960_720.jpg`,
      name: "Go to Product #3",
      description: "3 - Probably the most random thing you have ever seen!",
    },
  ];

  const [index, setIndex] = React.useState(0);

  const handleChange = (cur, prev) => {
    setIndex(cur);
    console.log(cur, prev);
  };

  return (
    <div>
      <Carousel
        index={index}
        onChange={handleChange}
        interval={5000}
        animation="slide"
        indicators={false}
        stopAutoPlayOnHover
        swipe
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}
