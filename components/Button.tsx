import { CSSProperties } from "react";

const Button = (props: any) => {
    let style: CSSProperties = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
        background: '#414047',
        borderRadius: 10,
        maxHeight: 40,
        width: "max-content",
        paddingLeft: 10,
        paddingRight: 10,
        height: 40,
        color: '#ffffff',
    }
    let buttonText: CSSProperties = {
        fontFamily: "Manrope",
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: '22px',
        textAlign: 'start',
        letterSpacing: '-0.408px',
        marginRight: 10,
    }

    if (props.style) {
        style = {...style, ...props.style};
    }

    const onClick = () => {
        if (props.onClick) return props.onClick();
        return null;
    }

    return (
        <div style={style} onClick={onClick}>
            <span style={buttonText}>{props.text}</span>
            {
                props.endIcon ? props.endIcon : ''
            }
        </div>
    );
}

export default Button;