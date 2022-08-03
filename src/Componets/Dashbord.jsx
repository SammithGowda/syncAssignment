import { useNavigate } from "react-router-dom";
import "../Style/Dashbord.css";
export const Dashbord = () => {
  const token = sessionStorage.getItem("Token");
  const navigate = useNavigate();

  const logout = () => {
    alert("Are you sure want to logout");
    sessionStorage.removeItem("Token");
    navigate("/");
  };
  if (!token) {
    return (
      <div>
        <h1>please login first</h1>
      </div>
    );
  }
  let Coordinates = [
    { City: "Bangaluru", lat: 12.9716, lon: 77.5946 },
    { City: "Pune", lat: 18.5204, lon: 73.8567 },
    { City: "Goa", lat: 15.2993, lon: 74.124 },
    { City: "Mumbai", lat: 19.076, lon: 72.8777 },
    { City: "Hyderabad", lat: 17.385, lon: 78.4867 },
    { City: "Chennai", lat: 13.0827, lon: 80.2707 },
    { City: "Kolkata", lat: 22.5726, lon: 88.3639 },
    { City: "Mangalore", lat: 12.9141, lon: 74.856 },
    { City: "Paris", lat: 48.8566, lon: 2.3522 },
    { City: "London", lat: 51.5072, lon: 0.1276 },
  ];
  return (
    <>
      <div>
        <div className="nav_div">
          <button className="btn" onClick={() => logout()}>
            Logout
          </button>
        </div>
        <div className="container_div">
          {Coordinates.map((el, index) => (
            <div
              onClick={() =>
                navigate("/mapview/parameter-data", {
                  state: { lat: el.lat, lon: el.lon },
                })
              }
            >
              <p>{el.City}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
