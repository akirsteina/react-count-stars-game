import { Fragment } from 'react';
import styled from 'styled-components';

const Number = styled.button`
	background-color: #eee;
	border: thin solid #ddd;
	width: 45px;
	height: 45px;
	margin: 10px;
	font-size: 25px;
	cursor: pointer;

	&:focus,
	&:active {
		outline: none;
		border: thin solid #ddd;
	}
`;

const Numbers = (props) => {
	return (
		<Fragment>
			{props.numbers.map((number) => (
				<Number key={number}>{number}</Number>
			))}
		</Fragment>
	);
};

export default Numbers;
