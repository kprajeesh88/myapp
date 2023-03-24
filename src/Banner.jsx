import homeImage from "./assets/img-1.png"

export default function Banner(){
    return(
        <div className="banner">
          <img src={homeImage} className="bannerImage" alt="image"/>
          <div className="bannerContent">
            <h1>Life is short and the world is wide.<br/>I better get started.</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        </div>
    )
}