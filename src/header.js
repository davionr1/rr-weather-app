import "./header.css";
import { Map } from "./components/map";
import { Home } from "./components/home";
import { Weather } from "./components/weather";

export function Header(){
    return(
        <div className="container">
            <div class="col-sm-9">Weather App</div>
            <div className="row">
            <div class="col-sm-4"><Map/>Map</div>
            <div class="col-sm-5"><Home/>Home</div>
            <div class="col-sm-6"><Weather/>Weather</div>
            </div>
        </div>
    )
}