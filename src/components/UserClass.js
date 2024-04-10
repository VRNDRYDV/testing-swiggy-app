
import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props)
        this.state={
            // count:0,
            // count2:2

            userInfo:{
                name:"Viru",
                location:"default",
                avatar_url:"http"

            }
        }
       console.log(this.props.name +"Child constructor")
    }
     
    async componentDidMount(){
        //console.log(this.props.name +"Child Component Did Mount")


        const data= await fetch("https://api.github.com/users/VRNDRYDV")
        const json= await data.json()

        this.setState({
            userInfo:json,
        })
        console.log(json)
    }

    componentDidUpdate(){
        console.log("component Did Update")
    }

    componentWillUnmount(){
        console.log("component Will Unmount")
    }
    render(){

       // const{name,location}= this.props
        // const {count}=this.state;

        console.log(this.props.name +"child render")

        const  {name,location,avatar_url}=this.state.userInfo
        return(
            <div className="user-card">
                {/* <h1>Count={this.state.count}</h1> */}
                {/* <h1>Count={count}</h1>
                <button onClick={()=>{
                    this.setState({
                    count :  this.state.count+1
                    })
                }}
                
                >Count Increase</button> */}

                <img src={avatar_url} alt="" />
                <h2>Name- {name}</h2>
                <h3>Location-{location}</h3>
                <h4>Contact-8837731674</h4>
    
            </div>
        )
    }
}

export default UserClass