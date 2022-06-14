import React, { Component } from "react";
import GalleryCell from "../galleryCell/galleryCell";
import "./galleryCells.css";

class GalleryCells extends Component {
  state = {
    cards: [
      {
        name: "Concluding the Top Tourist Attractions in Africa",
        link: "https://africawanderlust.com/wp-content/uploads/2019/12/picturesque-view-of-Okavango-Delta-Botswana.jpg",
      },
      {
        name: "Mount Kilimanjaro",
        link: "https://africawanderlust.com/wp-content/uploads/2019/12/Amboseli-National-Park-Kenya-Africa.jpg",
      },
      {
        name: "Victoria Falls",
        link: "https://africawanderlust.com/wp-content/uploads/2019/12/victoria-falls-waterfall-attraction.jpg",
      },
      {
        name: "Cape Town",
        link: "https://africawanderlust.com/wp-content/uploads/2019/12/Lions-Head-Cape-Town-South-Africa.jpg",
      },
      {
        name: "The Maasai Mara National Reserve",
        link: "https://africawanderlust.com/wp-content/uploads/2019/12/Giraffe-Maasai-Mara-Kenya.jpg",
      },
      {
        name: "Zanzibar, Tanzania",
        link: "https://africawanderlust.com/wp-content/uploads/2019/12/zanzibar-tanzania-image.jpg",
      },
    ],
  };

  render() {
    return (
      <section className="gallery">
        <ul className="gallery__cells">
          {this.state.cards.map((card) => (
            <GalleryCell
              title={card.name}
              link={card.link}
              alt={card.name}
            ></GalleryCell>
          ))}
        </ul>
      </section>
    );
  }
}

export default GalleryCells;
