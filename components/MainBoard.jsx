import { useState } from 'react';
import { TarotReading } from '../src/api/tarotAPI.js'
import CardDetail from './CardDetail.jsx';
import { Link } from 'react-router-dom';

const MainBoard = () => {


	const facedowCards = [];
	for (let i = 0; i < 12; i++) {
		facedowCards.push(i)

	}
	const Cardsrow = facedowCards.map((item, index) => (
		<img
			key={index}
			className='facedown'
			src="/images/thecover.png"
			alt="Select a card"
			onClick={() => setSelectCard(index)}

		/>))
		
const [readingResult, setReadingResult] = useState(null)
const [selectedCard, setSelectCard] = useState(null)

const handleReading = async () => {

	if (readingResult) {
		setReadingResult(null);
		setSelectCard(null);
		return
	}

	if (selectedCard === null) {
		alert("Select a card first")
		return;
	}

	try {
		const data = await TarotReading();
		console.log(data)

		if (data && data.success === 1 && data.data) {
			setReadingResult(data.data);

		}
	} catch (e) {
		console.error("Failed to fetch tarot reading:", error);
	}
};



return (
	<div>

		{!readingResult && <div className='cardContainer'>{Cardsrow} </div>}
		{readingResult && <CardDetail card={readingResult} />}

		<div className='getButton'>
			<button className='getReadingBtn' onClick={handleReading}>
				{readingResult ? "Get another card" : "Get Tarot Reading"}
			</button>
			<Link to="/Horoscopo"> <button className='getReadingBtn'> HoroscopoDaily</button> </Link>
		</div>
	</div>
);

}
export default MainBoard;

