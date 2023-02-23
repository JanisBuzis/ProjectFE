import './Button.css'

function Button(props) {
    let { ...childrens} = props
    
    return(
        <button {...childrens} className = 'button_elem'>
            Add to basket
        </button>
    )
}

export default Button