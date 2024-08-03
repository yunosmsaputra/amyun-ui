import React from "react"
import {IButton} from "./Button.types";

const ButtonComponent:React.FC<IButton> = ({
    label, color, variant, onClick
                                           }) => {
    const styles = {
        button: {
            padding: '8px',
            fontSize: '12px',
            fontWeight: '600',
            background: variant == 'solid' ? (color == 'primary' ? '#2671D9' : '#FF5656') : '#FFFFFF',
            color: variant == 'solid' ? '#FFFFFF' : (color == 'primary' ? '#2671D9' : '#FF5656'),
            border: `1px solid ${color == 'primary' ? '#2671D9' : '#FF5656'}`,
            borderRadius: '6px'
        }
    }
    return (
        <button style={styles.button} onClick={onClick}>{label}</button>
    )
}

ButtonComponent.displayName = 'AmButton'
export default ButtonComponent