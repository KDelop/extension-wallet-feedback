import Image from "next/image"

const style = {
    width: '100%',
    height: 'max-content',
    padding: 12,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start'
}

export const CategoryRow = (props: any) => {
    return (
        <div style={style}>
            <Image src={"/icons/chart.svg"} width={35} height={35} />
            
        </div>
    )
}