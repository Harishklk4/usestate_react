import React from "react"
class Corn extends React.Component{
    constructor(props){
        super(props)
        this.first={
            id:0,
            firstName:"hari",
            lastName:"ragav",
            location:"chennai",
            salary:200000
        }


    }
    
    render(){
        return(
            <div>
                
                    {
                        this.first.id == 0 ?
                        <div style={{backgroundColor:"red",display:"grid",justifyContent:"center",alignContent:"center",border:"5px blue solid",width:"400px",marginLeft:"400px",height:"300px"}}>
                            <div>
                                <h1>login</h1>
                                <input type="text" placeholder="name" /> <br/> 
                                <input type="password" placeholder="password" /> <br/>

                                <button>Login
                                    
                                </button>
                            </div>
                        </div>  :   <br/>

                    }

{
                        this.first.id == 1 ?
                        <div>
                            <div>
                            <h1>signin</h1>
                                <input type="text" placeholder="name" /> <br/> 
                                <input type="password" placeholder="password" /> <br/>
                                <p>froget password</p>
                                <button>Login</button>
                            </div>
                        </div>  :   <br/>

                    }
               
            </div>
        )
    }

}
export default Corn;