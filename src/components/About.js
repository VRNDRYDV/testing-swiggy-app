import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";


class About extends Component{
    

    constructor(props) {
        super(props);

        //console.log("parent constructor")
    }

    componentDidMount(){
       // console.log( "parent Component Did Mount")
    }


    render() {

        //console.log("parent render")
        return(
            <div>
                <h1>About</h1>
                <h1>This is Namaste React Web series</h1>
                {/* <User name={"Virendra Kumar Yadav"}/> */}
                <UserClass name={"Virendra Kumar(class)"}location={"Jhajha bazaar"}/>
                {/* <UserClass name={"Virendra Yadav(class)"}location={"Jhajha Market"}/> */}

            </div>
        )
    }
}


// const About = ()=>{
//     return(
//         <div>
//             <h1>About</h1>
//             <h1>This is Namaste React Web series</h1>
//             {/* <User name={"Virendra Kumar Yadav"}/> */}
//             <UserClass name={"Virendra Kumar(class)"}location={"Jhajha bazaar"}/>
//         </div>
//     )
// }
export default About;