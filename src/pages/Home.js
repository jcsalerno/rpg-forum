import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "../components/head.js";
import Image1 from "../Img/380883.jpg";
import Image2 from "../Img/380890.jpg";
import Image3 from "../Img/380891.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function home() {
  return (
    <React.Fragment>
      <Head></Head>
      <Carousel>
        <div>
          <img src={Image1} />
          <p className="legend">Imagem 1</p>
        </div>
        <div>
          <img src={Image2} />
          <p className="legend">Imagem 2</p>
        </div>
        <div>
          <img src={Image3} />
          <p className="legend">Imagem 3</p>
        </div>
      </Carousel>
      <div class="container bg-dark" style={{ height: "85vh" }}>
        <h1 class="text-success">Ta quebrando</h1>
      </div>
    </React.Fragment>
  );
}

export default home;
