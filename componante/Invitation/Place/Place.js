import './Place.css'
export default function Place(props){
    return(
        <div className ="App-header5"> My house is behind our school , near <span> {props.place} </span>
        <p>I hope you will come and seen you soon.</p>
        </div>
    )
}