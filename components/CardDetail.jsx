
const CardDetail = ({card}) => {
if(!card) {
    return <p>Loading card</p>
}

console.log("🔮 CardDetail received:", card);
    return (
        <div className="container">
            <h1 className="">{card.card}({card.category})</h1>
            <div className="card-container">
                <img className="card-image" src={card.image} alt={card.card} />
                <div className="sections">
                    <p><strong>❤️ Love:</strong> {card.love}</p>
                    <p><strong>💼 Career:</strong> {card.career}</p>
                    <p><strong>💰 Finance:</strong> {card.finance}</p>
                </div>
            </div>
            
        </div>
    );
}

export default CardDetail;
