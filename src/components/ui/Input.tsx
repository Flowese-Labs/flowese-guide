/** @jsxImportSource @emotion/react */
import { inputStyles } from '../shared-styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return <input css={inputStyles} {...props} />
}