import { Fragment } from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background-color: #4caf50;
	border: none;
	border-radius: 5px;
	color: white;
	padding: 15px 32px;
	margin-top: 10px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	cursor: pointer;
`;

const GameStatus = styled.div`
	margin-top: 10px;
	font-weight: bold;
	font-size: 30px;
	color: ${(props) => (props.gameStatus === 'won' ? 'green' : 'red')};
`;

const PlayAgain = (props) => {
	let message;
	if (props.gameStatus === 'won') {
		message = (
			<GameStatus gameStatus={props.gameStatus}>Good job, you won!</GameStatus>
		);
	}
	if (props.gameStatus === 'lost') {
		message = <GameStatus gameStatus={props.gameStatus}>Game over!</GameStatus>;
	}
	return (
		<Fragment>
			{message}
			<Button onClick={props.resetGame}>Play Again</Button>
		</Fragment>
	);
};

export default PlayAgain;
