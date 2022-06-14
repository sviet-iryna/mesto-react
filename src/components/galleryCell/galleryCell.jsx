import React, { Component, StrictMode } from "react";
import "./galleryCell.css";
import { SuitHeart, TrashFill, SuitHeartFill } from "react-bootstrap-icons";
// import img from '../img/photo-grid-arisa.jpg'

class GalleryCell extends Component {
  state = {
    imgUrl: this.props.link,
    hederName: this.props.title,
    imgAlt: this.props.alt,
    isLikeSet: false,
  };
  render() {
    let like;
    if (this.state.isLikeSet === true) {
      like = <SuitHeartFill size={20}></SuitHeartFill>;
    } else {
      like = <SuitHeart size={20}></SuitHeart>;
    }
    return (
      <React.Fragment>
        <div className="gallery__cell">
          <div className="gallery__cell_content">
            <img
              className="gallery__cell-image"
              src={this.state.imgUrl}
              alt={this.state.imgAlt}
            />
            <button className="gallery__cell-button-delete" type="button">
              <TrashFill
                size={20}
                className="gallery__button-like-img"
              ></TrashFill>
            </button>
          </div>
          <div className="gallery__cell-description">
            <h2 className="gallery__cell-title">{this.state.hederName}</h2>
            <button
              className="gallery__button-like"
              onClick={() => {
                this.state.isLikeSet = this.state.isLikeSet === false ? true : false;
                // if (this.state.isLikeSet === false) {
                //   this.state.isLikeSet = true;
                // } else {
                //   this.state.isLikeSet = false;
                // }
                this.setState(this.state);
              }}
            >
              {like}
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GalleryCell;
