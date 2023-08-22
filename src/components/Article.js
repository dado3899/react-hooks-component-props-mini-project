// an <article> element, with the following elements inside:
// an <h3> element displaying the title of the article, passed as a prop called title
// a <small> element displaying the date of the article, passed as a prop called date
// a default value of "January 1, 1970" should be used if no date is passed as a prop
// a <p> element displaying the preview of the article, passed as a prop called preview
function Article({title,date,preview,minutes}){

    let minutesString = ""
    if(minutes<30){
        //use coffee ☕️
        console.log(Math.ceil(minutes/5))
        for(let i=0; i<Math.ceil(minutes/5);i++){
            minutesString += "☕️"
        }
        minutesString += " " + minutes + " Minutes Read"
        console.log(minutesString)
    }
    else{
        //use Box 🍱
        for(let i=0; i<Math.ceil(minutes/10);i++){
            minutesString += "🍱"
        }
        minutesString += " " + minutes + " Minutes Read"
    }
    
    return(
        <div>
            <h3>{title}</h3>
            <small>{date? date : "January 1, 1970"} . </small>
            <small>{minutesString}</small>
            <p>{preview}</p>
        </div>
    )
}
export default Article