import "./styles/AboutMe.css";

function AboutMe() {
  return (
    <div className=" container">
      <br />
      <div className="row">
        <div className="col-md mx-auto">
          <img
            src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/001/044/667/datas/profile.jpg"
            alt="Foto de perfil"
            className="profile-picture mx-auto"
          />
          <h1 className="about-title">Adrian Cardenas Chiang</h1>
        </div>

        <div className="col-md">
          <div className="info ">
            <h4>✉️ Achiang504@gmail.com</h4>
            <h4>Linkedin: Adrian Cardenas</h4>
          </div>

          <br />

          <div className="info  ">
            <h4>Acerca de mi:</h4>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium veniam minus, similique eius qui, odit inventore harum sequi itaque necessitatibus illum tempore! Optio odio inventore voluptatem quae quam dolor eaque?
            </h5>
          </div>
        </div>
      </div>
      <br/>
    </div>
  );
}

export default AboutMe;
