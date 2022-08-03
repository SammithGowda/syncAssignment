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
      <div className="Error_msg">
        <h1>User not logged in</h1>
      </div>
    );
  }
  let Coordinates = [
    { id: 1, City: "Bangaluru", lat: 12.9716, lon: 77.5946, imgutl: "" },
    { id: 2, City: "Pune", lat: 18.5204, lon: 73.8567 },
    { id: 3, City: "Goa", lat: 15.2993, lon: 74.124 },
    { id: 4, City: "Mumbai", lat: 19.076, lon: 72.8777 },
    { id: 5, City: "Hyderabad", lat: 17.385, lon: 78.4867 },
    { id: 6, City: "Chennai", lat: 13.0827, lon: 80.2707 },
    { id: 7, City: "Kolkata", lat: 22.5726, lon: 88.3639 },
    { id: 8, City: "Mangalore", lat: 12.9141, lon: 74.856 },
    { id: 9, City: "Delhi", lat: 28.7041, lon: 77.1025 },
    { id: 10, City: "Kerala", lat: 10.8505, lon: 76.2711 },
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
              key={el.id}
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
