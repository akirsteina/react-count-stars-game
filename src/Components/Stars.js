import { Fragment } from 'react';
import styled from 'styled-components';

const Star = styled.div`
	display: inline-block;
	margin: 0 15px;
	font-size: 50px;
`;

const Stars = (props) => {
	return (
		<Fragment>
			{props.stars.map((star) => (
				<Star className='star' key={star}>
					&#9733;
				</Star>
			))}
		</Fragment>
	);
};

export default Stars;
