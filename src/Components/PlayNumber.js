import styled from 'styled-components';

const PlayNum = styled.button`
	background-color: #eee;
	border: thin solid #ddd;
	width: 45px;
	height: 45px;
	margin: 10px;
	font-size: 25px;
	cursor: pointer;
	background-color: ${(props) => colors[props.status]};

	&:focus,
	&:active {
		outline: none;
		border: thin solid #ddd;
	}
`;

const colors = {
	available: 'lightgray',
	used: 'lightgreen',
	wrong: 'lightcoral',
	candidate: 'deepskyblue',
};

const PlayNumber = (props) => {
	return (
		<PlayNum onClick={() => props.onClick(props.number, props.status)} status={props.status}>
			{props.number}
		</PlayNum>
	);
};

export default PlayNumber;
