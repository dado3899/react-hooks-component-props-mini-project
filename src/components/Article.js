function Article({title,date,preview,minutes}){
    let minuteDisplay = ""
    if(minutes < 30){
        const coffeeToDisplay = Math.ceil(minutes/5)
        for(let i=0; i<coffeeToDisplay; i++){
            minuteDisplay += "☕️"
        }
        minuteDisplay += ` ${minutes} to read`
    }
    else{
        const coffeeToDisplay = Math.ceil(minutes/10)
        for(let i=0; i<coffeeToDisplay; i++){
            minuteDisplay += "🍱"
        }
        minuteDisplay += ` ${minutes} to read`
    }
    console.log(minuteDisplay)


    return(
        <article>
            <h3>{title}</h3>
            <p>{minuteDisplay}</p>
            {/* If date exists, display date, if not display default */}
            <small>{date ? date : "January 1, 1970"}</small>
            <p>{preview}</p>
        </article>
    )
}
export default Article