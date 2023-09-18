import React from "react"


export default function Card(props) {
    return(
        <>
            <div className="card-div">
                <div className="img-div">
                    <img className ="img" src={props.imageUrl} />
                </div>
                <div className="content-div">
                    <i className="fas fa-map-marker-alt" style={{ color: '#F55A5A' }}></i><span className="country">{props.title}</span><span className="maps"><a href={props.googleMapsUrl}>View on Google Maps</a></span>
                    <h1>{props.location}</h1>
                    <p className="date">{props.startDate} - {props.endDate}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    ) 
}