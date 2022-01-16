import Link from 'next/link';
import styles from '../styles/header.module.css';
import { Col } from 'react-grid-system';
import Row from './row';
import Image from 'next/image';

const Header = (props: any) => {

	return (
		<div className={styles.wrapper}>
			<Col xs={3}>
				<Row style={{ margin: 0 }}>
					<Col xs={6} style={{ padding: 0 }}>
						<Link href={props.goBack ? props.goBack : "/"}>
							<Image src={'/icons/back.svg'} alt="back-button" width={24} height={24} />
						</Link>
					</Col>
					<Col xs={6} style={{ padding: 0 }}>
						<Link href="/experiences">
							<Image src={'/icons/home.svg'} alt="back-button" width={24} height={24} />
						</Link>
					</Col>
				</Row>
			</Col>
			<Col xs={6}>
				<Link href="/experiences">
					<Image src={'/icons/account-header.svg'} alt="back-button" width={174} height={45} />
				</Link>
			</Col>
			<Col xs={3}>
				<Row style={{ margin: 0 }}>
					<Col xs={6} style={{ padding: 0 }}>
						<Link href="/">
							<Image src={'/icons/noti.svg'} alt="back-button" width={24} height={24} />
						</Link>
					</Col>
					<Col xs={6} style={{ padding: 0 }}>
						<Link href="/experiences">
							<Image src={'/icons/setting.svg'} alt="back-button" width={24} height={24} />
						</Link>
					</Col>
				</Row>
			</Col>
		</div>
	)
};

export default Header;
