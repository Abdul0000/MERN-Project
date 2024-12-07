const InputCalculator = (props) => {
    return <input className='display' key={props.currentVal} type='text' value={props.currentVal} readOnly />;
}

export default InputCalculator;
