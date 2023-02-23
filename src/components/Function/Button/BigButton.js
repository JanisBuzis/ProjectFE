import './Button.css'

function BigButton(props) {
    let { ...childrens} = props
    
    return(
        <button {...childrens} className = 'big_button'>
            Add to basket
        </button>
    )
}

export default BigButton