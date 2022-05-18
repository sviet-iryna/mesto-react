import React, { Component, StrictMode } from "react";
import "./galleryCell.css";
// import img from '../img/photo-grid-arisa.jpg'

class GalleryCell extends Component {
  state = {
    imgUrl: this.props.link,
    hederName: this.props.title,
    imgAlt: this.props.alt,
  };
  render() {
    return (
      <React.Fragment>
        <div className="gallery__cell">
          <div className="gallery__cell_content">
            <img
              className="gallery__cell-image"
              src={this.state.imgUrl}
              alt={this.state.imgAlt}
            />
            {/* <button className="gallery__cell-button-delete" type="button">
              <img
                className="gallery__cell-button-delete-image"
                src=""
                alt="Иконка мусорки"
              />
            </button> */}
          </div>
          <div className="gallery__cell-description">
            <h2 className="gallery__cell-title">{this.state.hederName}</h2>
            {/* <button className="gallery__button-like" type="button"></button> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GalleryCell;
