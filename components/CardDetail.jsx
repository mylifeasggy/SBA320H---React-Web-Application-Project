
const CardDetail = ({ card }) => {
    if (!card) {
        return <p>Loading card</p>
    }

    console.log("🔮 CardDetail received:", card);
    return (

        <div className="container">

            <div className="card-container">
                <h1 id="cardname" >{card.card}({card.category})</h1>
                <img className="card-image" src={card.image} alt={card.card} />
            </div>
            <div className="sections">
                <h3>  Love </h3>
                <p>{card.love}</p>
                <h3>Career</h3> <p> {card.career}</p>
                <h3> Finance </h3><p> {card.finance}</p>
            </div>


        </div>

    );
}

export default CardDetail;
