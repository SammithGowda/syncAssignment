import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
import "../Style/Map.css";
import { useLocation, useNavigate } from "react-router-dom";
export const Mapview = () => {
  // const [coo, setCoo] = useState({ lat: 48.8566, lon: 2.3522 });
  const navigate = useNavigate();
  const Zoom = 13;
  const { lat, lon } = useLocation().state;
  const coo = {
    lat: lat,
    lon: lon,
  };

  const Token = sessionStorage.getItem("Token");

  const logout = () => {
    alert("Are you sure want to logout");
    sessionStorage.removeItem("Token");
    navigate("/");
  };

  if (!Token) {
    return (
      <>
        <div>
          <h1>Pls Login </h1>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <div className="nav_div">
          <button onClick={() => logout()}>Logout</button>
        </div>

        {/* <iframe
          style={{ width: "60%", height: "300px", border: 0 }}
          title="my unique app"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA0ttYe6gb0q-spi6rdZY0PRxr9Pi8nRRE&q=${city}`}
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe> */}
        {/* <Map center={coo} zoom={Zoom} ref={Mapref}>
          <TileLayer
            url={`https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=FaGDTEesebNtVUL1fuo3`}
            attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
          />
        </Map> */}
        <MapContainer center={coo} zoom={Zoom} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}@2x.jpg?key=FaGDTEesebNtVUL1fuo3"
          />
          <Marker position={coo}>
            <Popup>Info goes here</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};
