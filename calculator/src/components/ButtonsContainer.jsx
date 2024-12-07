let Buttons = ({onButtonClick})=>{
    const buttons =['C','1','2','+','3','4','-','5','6','*','7','8','/','9','0','=','.'];
    return <div className ='buttons-container'>
            {buttons.map((button) => (<button key={button} onClick={()=> onButtonClick(button)} className='button_css'>{button}</button>))}
        </div>                     
}

export default Buttons