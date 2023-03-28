import { List, Number } from "./NumberList.styled"
export function NumberList({ array }) {
  return (
    <List>
      {array.map((el, index) => <li key={index}><Number>{ el }</Number></li>)}
    </List>
  )
}