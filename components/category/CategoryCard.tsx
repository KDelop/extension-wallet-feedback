import Image from "next/image"
import { CSSProperties } from "react"
import Row from "../row"

const style: CSSProperties = {
    width: '100%',
    height: 'max-content',
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'start',
    borderRadius: 6,
    margin: 8
}

export const CategoryCard = (props: any) => {
    return (
        <div style={{...style, background: props.bgColor}}>
            <Image src={props.icon} width={35} height={35} />
            <Row style={{width: '100%', justifyContent: 'space-between', paddingTop: 20}}>
                <span>{props.name}</span>
                <Image src={"/icons/arrow-right-secondary.svg"} width={12} height={12} />
            </Row>
        </div>
    )
}