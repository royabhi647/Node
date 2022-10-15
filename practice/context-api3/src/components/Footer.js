import React,{Component} from "react";
import { CommonContext } from "./CommonContext";

export default class Footer extends Component {

  render() {
    return (
      <CommonContext.Consumer >
        {
            ({color})=>(
                <h1 className="footer" style={{backgroundColor:color}}>Footer page</h1>
            )
        }
      </CommonContext.Consumer>
    );
  }
}
