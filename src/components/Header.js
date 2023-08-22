// an `<h1>` with the name of the blog, passed as a prop called `name`
function Header({name,address}){
    // const {name,address} = props
    // destructure
    const obj = {
        one:1,
        two:2
    }
    const {one,two} = obj
    //name = blogData.name
    console.log(name)
    return(
        <header>
            <h1>{name}</h1>
        </header>
    )
}

export default Header