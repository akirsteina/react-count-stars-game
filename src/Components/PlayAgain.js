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

const PlayAgain = (props) => {
	return <Button onClick={props.resetGame}>Play Again</Button>;
};

export default PlayAgain;
