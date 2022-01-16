import styles from '../styles/approw.module.css';
import Image from "next/image";
import { numberMinimize } from '../helpers/number';
import Link from 'next/link';

const AppRow = (props: any) => {
    const style = props.style ? props.style : {};
    return (
        <Link href={"/details?id=" + props.data.id}>
            <div className={styles.wrapper} style={style}>
                <Image src={props.data.image} alt="search icon" width={69} height={69} />
                <div className={styles.appDetailWrapper}>
                    <span className={styles.appTitle}>{props.data.title}</span>
                    <span className={styles.appDetail}>{props.data.description}</span>
                    <span className={styles.more}>+{numberMinimize(props.data.user_amount)} users</span>
                </div>
                <Image src={"/icons/arrow-right-secondary.svg"} alt="search icon" width={24} height={24} />
            </div>
        </Link>
    )
}

export default AppRow;