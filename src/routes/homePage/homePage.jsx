import SearchBar from "../../components/searchBar/searchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>
          <div className="boxes">
            <div className="box">
              <h1>00+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>00</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>00+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
          <SearchBar />
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.jpg" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
