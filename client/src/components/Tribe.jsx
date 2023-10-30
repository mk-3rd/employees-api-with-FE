export default function Tribe(props){
      return(
        <tr>
        <th scope="row">{props.id}</th>
            <td>{props.name}</td>
            <td>{props.department}</td>
      </tr>
  
      )
  }