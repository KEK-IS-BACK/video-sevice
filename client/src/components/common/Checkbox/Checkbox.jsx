import React from 'react'
import './Checkbox.scss'

const Checkbox = (props) => {

  const {name, label, className, onChange,  restProps} = props

  return (
    <div className={`checkbox ${className}`} {...restProps}>
      <input type="checkbox" id={name} className='checkbox__input' onChange={onChange} name={name}/>
      <label htmlFor={name} className='checkbox__label'>
        <div className='checkbox__box'></div>
        {label}
      </label>
    </div>
  )
}

export default Checkbox
