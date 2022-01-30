import React, {useState} from 'react';      //useState is used as session variable 

export default function TextForm(props) {

    const[text, setText] = useState('Enter your text here')
    const ChangeToUpperCase = () =>{
        console.log('Clicked on Change to UpperCase Button');
        let newText = text.toUpperCase();
        setText(newText);
    }

    const ChangeToLowerCase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    const onChangeHandler = (event) =>{
        console.log('On Change Handler');
        setText(event.target.value)
    }

    return <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={onChangeHandler} id="myText" rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary my-3"onClick={ChangeToUpperCase}>Change to Uppercase</button> 
        <button type="button" className="btn btn-secondary my-3"onClick={ChangeToLowerCase} >Change to Lowercase</button> 
    </div>;
}
