import "./for_css.css"
function dec(){
    var hi={
        backgroundColor:"blue"
    }
    return(
        <div>
            <h1 style={{backgroundColor:"red",color:"white"}}>harish</h1>

            <h1 style={hi}>Hello</h1>

            <h1 className="ext">external</h1>
        </div>
    )
}
export default dec