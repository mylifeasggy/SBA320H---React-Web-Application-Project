import { Horoscopo } from "../src/api/horoscopoAPI.js";
import { Link } from "react-router-dom";

const HoroscopoDaily = () => {
    return (

        <div className="horoscopo-container">
            <div className="content">
                <h2>COMING SOON 🔮 </h2>
            
                <Link to="/"> <button className="dtBtn"> Daily Tarot </button> </Link>
                </div>
        </div>

    );
}

export default HoroscopoDaily;
