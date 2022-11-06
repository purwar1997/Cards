function Card({ imgURL, heading, btnText, linkURL }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imgURL} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{heading}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href={linkURL} className="btn btn-primary">
          {btnText}
        </a>
      </div>
    </div>
  );
}

export default Card;
