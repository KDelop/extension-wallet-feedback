import { CSSProperties } from "react";

const layoutStyle: CSSProperties = {
	margin: 0,
	border: '1px solid #DDD',
	height: 'calc(100vh - 72px)',
	overflow: 'hidden',
	marginTop: 72
};

const Layout = (props: any) => (
	<div style={layoutStyle}>
		{props.children}
	</div>
);

export default Layout
