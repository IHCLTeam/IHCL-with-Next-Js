import { Grid } from "@mui/material";


export function HeadBar () {
    return (
 <div className="headbottom" style={{ display: "flex" }}>
        <div className="bot">
          <span>10+</span>
          <span>countries</span>
        </div>
        <div className="bot" >
          <span>100+</span>
          <span>Locations</span>
        </div>
        <div className="bot" >
          <span>70+</span>
          <span>Spas</span>
        </div>
        <div className="bot" >
          <span>200+</span>
          <span>Hotels</span>
        </div>
        <div className="bot">
          <span>400+</span>
          <span>Restaurants</span>
        </div>
        <div className="bot" >
          <span>25,000+</span>
          <span>Rooms</span>
        </div>
        <div className="bot">
          <span>34,000+</span>
          <span>Employees</span>
        </div>
        <div>
          <hr className="line"></hr>
        </div>
        <br></br>
        <br></br>
        <div className="bot">
          <a href="https://www.ihcltata.com/investors/"><span>The Indian Hotels Company Ltd </span></a>
          <span className="bott">NSE: INDHOTEL</span>
        </div>
      </div>
    )
}