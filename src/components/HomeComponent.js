import React from "react";
import { useNavigate, Link } from 'react-router-dom';

function HomeComponent(props) {
    const history = useNavigate();

    const handleClick = (e) => {
        /*history("/detail", {image: e.target.currentSrc});*/
        console.log(history);
        <Link to={{
         pathname: "/detail",
         state: {image: e.target.currentSrc}
        }}>

        </Link>
    }

  return (
    <>
        <div className="wrapper">
            {props.imageData && props.imageData.map((element, index) =>
             (
             <div className="images">
                <img src={`https://${element.uri}?rule=mo-200.jpg`} alt="" height='300px' width='300px'
                     onClick={handleClick}   />
             </div>
             )
            )}
        </div>
    </>
  );
}

export default HomeComponent;