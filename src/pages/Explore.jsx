import { useState } from "react";
import { Link } from "react-router-dom";
import cities from "../data/cities";
import Button from "../components/button";
import "../styles/Explore.css";

function Explore({bucketList, setBucketList}) {

    //user can search places
    const [selectedCity, setSelectedCity] = useState(null);
    const [message, setMessage] = useState("");
    function addToBucketList(place, selectedCity) {
        const alreadyAdded = bucketList.some(
            (item) => item.id === place.id
        );
        if (alreadyAdded) {
            setMessage(
                `${place.name} already in your bucket list`
            );
            return;
        }

        const newPlace = {
            id: place.id,
            name:place.name,
            city: selectedCity.name
            };
            setBucketList([...bucketList, newPlace]);
            setMessage(`${place.name} added to your bucket list`);
        }
    return (
        <main>
            <h2>Explore the Cities</h2>
            {!selectedCity && (
                <section>
                    {cities.map((city) => (
                        <div key={city.id}>
                            <h3>{city.name}</h3>
                            <Button onClick={() => {setSelectedCity(city); setMessage("");}}>Explore {city.name}</Button>
                
                </div>
            ))}
            </section>
            )}

            {selectedCity && (
                <section>
                    <Button onClick={() => {setSelectedCity(null); setMessage("");}}>
                        Back to Cities
                    </Button>
                    <h2>{selectedCity.name}</h2>
                    <h3>Places to visit</h3>
                    {message && (
                        <div className="message">{message}</div>
                    )}
                    {selectedCity.places.map((place) => (
                        <div key={place.id}>
                            <h4>{place.name}</h4>
                            <Button
                            onClick={() => (
                                addToBucketList(place, selectedCity)
                            )}>
                                Add to bucketlist
                            </Button>
                            <Link className="quiz-link" to={`/quiz/${selectedCity.id}/${place.id}`}>
                            Take Quiz
                            </Link>
                        </div>
                    ))}
                </section>
            )}
        </main>
    );

}

export default Explore;