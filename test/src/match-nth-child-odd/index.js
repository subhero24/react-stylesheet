import React from 'react';
import Style from 'react-style-sheet';

const Stylesheet = Style`
    :nth-child(odd) {
        color: blue;
    }
`;

export default props => {
	return (
		<Stylesheet>
			<span>span</span>
			<span>span</span>
			<span>span</span>
			<span>span</span>
			<span>span</span>
			<span>span</span>
			<span>span</span>
		</Stylesheet>
	);
};
