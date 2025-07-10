import { useState } from 'react';
import { TarotReading } from '../src/api/tarotAPI.js'
import CardDetail from './CardDetail.jsx';

const MainBoard = () => {

	const facedowCards = [];
	for (let i = 0; i < 12; i++) {
		facedowCards.push(i)

	}

	const [readingResult, setReadingResult] = useState(null)
	const [selectedCard, setSelectCard] = useState(null)

	const handleReading = async () => {

		if (!selectedCard) {
			alert("Select a card first")
			return;
		}

		try {
			const data = await TarotReading();
			if(data && data.cards && data.cards.length > 0 ){
				setReadingResult(data.cards[0]); 
				
			}
		}catch(e){
			console.error("Failed to fetch tarot reading:", error);
		}
	};
	if(readingResult){
		return <CardDetail card={readingResult}/>
	}

	return (
		<div>
			<div className='cardContainer'>
			

					{facedowCards.map((item, index) => (
						<img
						    key={index}
							className='facedown'
							src="/images/thecover.png"
							alt="Select a card"
							onClick={()=> setSelectCard(index)}
						/>)
					)}
				</div>

				<div className='getButton'>
					<button className='getReadingBtn' onClick={handleReading}>Get Tarot Reading</button>


				</div>


			
		</div>
	)
}
export default MainBoard;

