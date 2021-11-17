import styled from 'styled-components';
import PlayNumber from './PlayNumber';
import Stars from './Stars';
import utils from '../Utils/utils';
import { useState } from 'react';

const Game = styled.div`
	max-width: 500px;
	margin: 0 auto;
	padding-top: 50px;
`;

const Wrapper = styled.div`
	display: flex;
	margin: -1;
`;

const HelpDiv = styled.div`
	color: #666;
	margin: 10px;
	text-align: center;
`;

const LeftContent = styled.div`
	text-align: center;
	width: 50%;
	border: thin solid #ddd;
`;

const RightContent = styled.div`
	text-align: center;
	padding: 10px;
	width: 50%;
	border: thin solid #ddd;
`;

const Timer = styled.div`
	color: #666;
	margin-top: 3px;
	margin-left: 3px;
`;

const StarMatch = () => {
	const [stars, setStars] = useState(utils.random(1, 9));
	const [availableNumbers, setAvailableNumbers] = useState(utils.range(1, 9));
	const [candidateNumbers, setCandidateNumbers] = useState([]);

	const candidatesAreWrong = utils.sum(candidateNumbers) > stars;

	const numberStatus = (number) => {
		if (!availableNumbers.includes(number)) {
			return 'used';
		}
		if (candidateNumbers.includes(number)) {
			return candidatesAreWrong ? 'wrong' : 'candidate';
		}
		return 'available';
	};

	const onNumberClick = (number, currentStatus) => {
		// currentStatus -> newStatus
		if (currentStatus === 'used') {
			return;
		}
		const newCandidateNumbers =
			currentStatus === 'available'
				? [...candidateNumbers, number]
				: candidateNumbers.filter((candidateNum) => candidateNum !== number);
		if (utils.sum(newCandidateNumbers) !== stars) {
			setCandidateNumbers(newCandidateNumbers);
		} else {
			const newAvailableNumbers = availableNumbers.filter(
				(num) => !newCandidateNumbers.includes(num)
			);
			setAvailableNumbers(newAvailableNumbers);
			setCandidateNumbers([]);
			setStars(utils.randomSumIn(newAvailableNumbers, 9));
		}
	};

	return (
		<Game>
			<HelpDiv>Pick 1 or more numbers that sum to the number of stars</HelpDiv>
			<Wrapper>
				<LeftContent>
					<Stars stars={utils.range(1, stars)} />
				</LeftContent>
				<RightContent>
					{utils.range(1, 9).map((number) => (
						<PlayNumber
							key={number}
							number={number}
							status={numberStatus(number)}
							onClick={onNumberClick}
						/>
					))}
				</RightContent>
			</Wrapper>
			<Timer>Time Remaining: 10</Timer>
		</Game>
	);
};

export default StarMatch;

// .game-done .message {
// 	font-size: 250%;
// 	font-weight: bold;
// 	margin: 15px;
//   }
