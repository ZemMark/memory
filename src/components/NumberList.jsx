export function NumberList({ array }) {
  return (
    <ul>
      {array.map((el, index) => <li key={index}>{ el }</li>)}
    </ul>
  )
}