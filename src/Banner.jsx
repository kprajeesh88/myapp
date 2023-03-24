import homeImage from "./assets/img-1.png"

export default function Banner(){
    return(
        <div className="banner">
          <img src={homeImage} className="bannerImage" alt="image"/>
          <div className="bannerContent">
            <h1>Life is short and the world is wide.<br/>I better get started.</h1>
            <p>I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.</p>
          </div>
        </div>
    )
}