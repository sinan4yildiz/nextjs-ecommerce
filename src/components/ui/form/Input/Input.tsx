import cn from 'clsx'
import React, { InputHTMLAttributes } from 'react'
import css from './Input.module.scss'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
   className?: string
   onChange?: (...args: any[]) => any
}

const Input = (props: Props) => {
   const { className, children, onChange, ...rest } = props

   const rootClassName = cn(css.root, {}, className)

   const handleOnChange = (e: any) => {
      if (onChange) {
         onChange(e.target.value)
      }
      return null
   }

   return (
      <label>
         <input
            className={rootClassName}
            onChange={handleOnChange}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            {...rest}
         />
      </label>
   )
}

export default Input