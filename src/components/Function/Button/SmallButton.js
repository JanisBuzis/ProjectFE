import './Button.css'

function SmallButton(props) {
    let { ...childrens} = props
    
    return(
        <button {...childrens} className = 'small_button'>
            Add to basket
        </button>
    )
}

export default SmallButton