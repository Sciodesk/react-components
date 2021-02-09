import React, {useState, useEffect} from 'react'

function TextFieldGroup(props) {

    const { placeholder, type, name, value, onChange, error = '' } = props

    const [errorClass, setErrorClass] = useState("")


    useEffect(() => {
        if(error.length === 0){
          setErrorClass("")
        }
        else{
          setErrorClass("text-group--error")
        }
    }, [error])

    return (
      <div className={"text-group " + errorClass}>
        <input
        className="input input-bottom-border"
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          type={type}
          value={value}
        ></input>
        <span>{error}</span>
      </div>
    );
}

export default TextFieldGroup
