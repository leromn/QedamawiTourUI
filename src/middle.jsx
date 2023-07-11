import CardTemplate from "./cardtemplate";
import video1 from "./vid.mp4";
export default function Middle() {
  return (
    <div className="middle">
      <video src={video1} autoplay="true" loop muted />
      {/* <img
        src="https://media.istockphoto.com/id/1424123595/vector/set-illustration-of-people-enjoying-outdoor-activities.jpg?s=1024x1024&w=is&k=20&c=VAuJ2psjpnjRe33Wsm054hTAWKxktagsajb_1YDdF6s="
        alt="image"
      /> */}
      <h1>About us</h1>
      <p>
        Qedamawi is a premier tour guide service based in Ethiopia. Our team of
        experienced guides are passionate about showcasing the rich history,
        culture, and natural beauty of our country. We offer a variety of tours,
        from exploring ancient ruins to trekking through the breathtaking
        landscapes of the Simien Mountains. Our personalized approach ensures
        that each tour is tailored to the interests and needs of our clients,
        providing an unforgettable experience that will leave you with a deep
        appreciation for Ethiopia's unique and diverse heritage.
      </p>
    </div>
  );
}
