import sunnyBg from "./assets/cloudy_day.jpeg";
import rainyBg from "./assets/rainy_day.jpeg";
import snowyBg from "./assets/snow_day.jpeg";
import cloudyBg from "./assets/cloudy_day.jpeg";
import cloudyIcon from "./assets/cloudyIcon.png";
import Details from "./components/Details";

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${rainyBg})` }}>
      {/* .overlay>.container>.section.section_inp
    uts  */}
      <div className="overlay">
        <div className="container">
          <div className="section section_inputs">
            <input type="text" name="city" placeholder="Enter city .." />
            <button>°F</button>
          </div>
          <div className="section section_temperatures">
            <div className="description">
              <h3>Luoyang</h3>
              <img
                src={cloudyIcon}
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
              <h3>cloudy</h3>
            </div>
            <div className="temperature">
              <h1>2°C</h1>
            </div>
          </div>
          <Details />
        </div>
      </div>
    </div>
  );
}

export default App;
