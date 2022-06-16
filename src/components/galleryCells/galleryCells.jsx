import React, { Component } from "react";
import GalleryCell from "../galleryCell/galleryCell";
import "./galleryCells.css";

class GalleryCells extends Component {
  state = {
    cards: [
      {
        name: "Concluding the Top Tourist Attractions in Africa",
        link: "https://africawanderlust.com/wp-content/uploads/2019/12/picturesque-view-of-Okavango-Delta-Botswana.jpg",
        id: 1,
      },
      {
        name: "Mount Kilimanjaro",
        link: "https://africawanderlust.com/wp-content/uploads/2019/12/Amboseli-National-Park-Kenya-Africa.jpg",
        id: 2,
      },
      {
        name: "Victoria Falls",
        link: "https://africawanderlust.com/wp-content/uploads/2019/12/victoria-falls-waterfall-attraction.jpg",
        id: 3,
      },
      {
        name: "Cape Town",
        link: "https://africawanderlust.com/wp-content/uploads/2019/12/Lions-Head-Cape-Town-South-Africa.jpg",
        id: 4,
      },
      {
        name: "The Maasai Mara National Reserve",
        link: "https://africawanderlust.com/wp-content/uploads/2019/12/Giraffe-Maasai-Mara-Kenya.jpg",
        id: 5,
      },
      {
        name: "Zanzibar, Tanzania",
        link: "https://africawanderlust.com/wp-content/uploads/2019/12/zanzibar-tanzania-image.jpg",
        id: 6,
      },
    ],
  };
  handleDelCard = (id) => {
    let newCards = this.state.cards.filter(
      (card) => card.id !== id
    );
    this.setState({ cards: newCards });
  };

  render() {
    return (
      <section className="gallery">
        <ul className="gallery__cells">
          {this.state.cards.map((card) => (
            <GalleryCell
              handleDelCard={this.handleDelCard}
              title={card.name}
              link={card.link}
              alt={card.name}
              id={card.id}
              key={card.id}
            ></GalleryCell>
          ))}
        </ul>
      </section>
    );
  }
}

export default GalleryCells;
