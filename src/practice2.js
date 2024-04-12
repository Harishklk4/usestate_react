import "./practice.css"
function para2(){
    var ic={
        backgroundColor:"blue",
        color:"white"
    }
    var ic1={
        backgroundColor:"blue",
        color:"white"
    }
    return(
        <div>
            <h1 style={{backgroundColor:"red",color:"white"}}>hello</h1>

            <h1 style={ic}>Internal CSS</h1>

            <h1 style={ic1}>Internal CSS</h1>

            <h1 className="xt">External CSS</h1>
        </div>
    )
}

export default para2