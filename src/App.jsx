import React from  "react"
import Header from "../components/Header.jsx"
import Card from "../components/Card.jsx"
import data from "../data.js"

export default function App() {
    const tripData = data;
    const card = tripData.map((datas) => {
            return (<Card
                key={datas.id}
                imageUrl={datas.imageUrl}
                googleMapsUrl={datas.googleMapsUrl}
                location={datas.title}
                title={datas.location}
                startDate={datas.startDate}
                endDate={datas.endDate}
                description={datas.description}
            />)
    })
    return (
        <>   
            <Header />
            {card}
        </>
    )
}