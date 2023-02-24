import './Inputs.css'

function Inputs (props){
    let { type, placeholder, color, size, ...otherProps} = props
    return(
        <input placeholder={placeholder} type={type} {...otherProps} className={`inputs_elem ${type} ${color} ${size}`}/>        
    )
}

export default Inputs