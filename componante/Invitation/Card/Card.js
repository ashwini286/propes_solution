import './Card.css'
export default function Card(props) {
    return (
        <div className ="App-header4">I am having a <span> {props.card} </span>next Friday at my Home . Would you like to come ? It will be fun .
         Lots of people from my school are coming . you know some of them - <span> {props.name1}, </span> <span>{props.name2}, </span> <span>{props.name3}. </span></div>
    )
}








//   I am having a birthday party next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are coming . you know some of them - Ritu , Saurabh , Kartik .
