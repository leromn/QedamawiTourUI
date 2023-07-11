import CardTemplate from "./cardtemplate";
export default function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <CardTemplate
        title="City Tours"
        imgsrc="https://cdn.pixabay.com/photo/2019/06/21/03/55/east-budleigh-4288376_1280.jpg"
        desc="Explore the history and culture of Ethiopia on a personalized tour of its cities. Learn about the unique architecture, famous landmarks, and vibrant communities."
      />
      <CardTemplate
        title="Nature Walks"
        imgsrc="https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317_1280.jpg"
        desc="Experience the stunning natural beauty of Ethiopia on a guided walk through its national parks, forests, and mountains. Take in breathtaking views and encounter rare wildlife."
      />
      <CardTemplate
        title="Cultural Immersion"
        imgsrc="https://cdn.pixabay.com/photo/2017/03/27/14/33/ancient-2179091_1280.jpg"
        desc="Get an authentic glimpse into the everyday life of Ethiopians through cultural immersion tours. Visit traditional markets, homes, and workshops to learn about local customs and traditions."
      />
    </div>
  );
}
