import styles from '../styles/search.module.css';
import Image from "next/image";

const Search = (props: any) => {
    const style = props.style ? props.style : {};
    return (
        <div className={styles.wrapper} style={style}>
            <Image src={"/icons/search.svg"} alt="search icon" width={22} height={22} />
            <input type="text" placeholder="Search experiences" />
        </div>
    )
}

export default Search;