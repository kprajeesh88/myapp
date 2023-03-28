import homeImage from "./assets/img-1.png";

export default function Article(props) {
  return (
    <div className="banner">
      <img src={props.itemImage} className="bannerImage" alt="image" />
      <div className="bannerContent">
        <h1>{props.itemTitle}</h1>
        <p>{props.itemContent}</p>
        <a href="#">Read more</a>
      </div>
    </div>
  );
}
