import { Link } from "react-router-dom";
import Button from "../components/button";

function Home() {
    return (
        <main>
            <section>
                <h2>Your Adventure Starts Here!</h2>
                <p>Discover amazing cities, explore famous places,
                    test your travel knowledge, and save the places you dream of visiting.
                </p>
                <div>
                    <Link to="/explore">
                    <Button>Explore Cities</Button>
                    </Link>
                </div>
            </section>
            <section>
                <h2>Explore the world</h2>
                <div>
                    <h3>Paris</h3>
                    <p>Eiffel Tower</p>
                     <img
                            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
                            alt="Eiffel Tower in Paris"
                        />
                        
                </div>
                <div>
                    <h3>Japan</h3>
                    <p>Mount Fuji</p>
                    <img
        src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=800&q=80"
        alt="Mount Fuji in Japan"
    />
                        
                </div>
            </section>
        </main>
    );
}

export default Home;