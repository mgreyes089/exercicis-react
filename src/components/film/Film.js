import "./Film.css";
import Title from "../title/Title";
import Description from "../description/Description";
import Review from "../review/Review";

function Film({ title, description, review }) {
  return (
    <div style={{ border: "1px solid black", borderRadius: "5px" }}>
      <Title title={title} />
      <Description description={description} />
      <Review aleix={review} />
    </div>
  );
}

export default Film;
