import Card from "./Card";
import { Cardsvg_1, Cardsvg_2, Cardsvg_3, Cardsvg_4 } from "../../Svg/Cardsvg";
const Cards = () => {
  return (
    <div className="card-container">
      <Card
        logo={<Cardsvg_1 />}
        postTitle="Represent"
        heading="Serve as a representative body for all Muslims on Campus"
        postTitleColor="#6B2F90"
      />
      <Card
        logo={<Cardsvg_2 />}
        postTitle="Organise"
        heading="Organise events to establish and maintain brotherhood/sisterhood"
        postTitleColor="#324C4C"
      />
      <Card
        logo={<Cardsvg_3 />}
        postTitle="Educate"
        heading="Educate Muslim/Non-Muslim youth about Islam and remove doubts"
        postTitleColor="#6C4E22"
      />
      <Card
        logo={<Cardsvg_4 />}
        postTitle="Entertain"
        heading="Having fun and bringing joy and laughter to student life at uni."
        postTitleColor="#912F46"
      />
    </div>
  );
};

export default Cards;
