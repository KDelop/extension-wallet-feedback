const RowStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

const Row = (props: any) => {
	const styles = props.style ? { ...RowStyle, ...props.style} : RowStyle;
	return (
		<div style={styles}>
			{props.children}
		</div>
	);
};

export default Row
