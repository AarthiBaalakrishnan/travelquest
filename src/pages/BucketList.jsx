import Button from "../components/button";
function BucketList({bucketList, setBucketList}) {
function removeBucketList(placeId) {
    const updatedList = bucketList.filter(
        (place) => place.id !== placeId
    );
    setBucketList(updatedList);
}
    return (
<main>
    <h2>My Bucket List</h2>
    {bucketList.length === 0 ? (
        <section>
        <p>Bucket List is Empty</p>
        <p>Explore the places and add to the Bucket List</p>
        </section>
    ):
    (
        <section>
            <p>
                Places in my Bucket List
            </p>
            <ul>
                {bucketList.map((place) => (
                    <li key={place.id}>
                        <h3>{place.name}</h3>
                        <p>City: {place.city}</p>
                        <Button onClick={() => removeBucketList(place.id)}>
                            Remove from List
                        </Button>
                    </li>
     ) )}
                </ul>
        </section>
    )}
</main>
        
    );

}
export default BucketList;