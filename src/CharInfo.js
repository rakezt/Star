import React, {Component} from 'react';


class CharInfo extends Component{
    constructor (props){
        super(props);
        
        this.state={
            expanded:false, 
        }
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)        
    }
    open=()=>{
        this.setState({expanded: !this.state.expanded })
    }
    close=()=>{
        this.setState({expanded: !this.state.expanded })
    }
    render(){
        const info=this.props.charInfo;
        if(!this.state.expanded){
            return <button className="bg-blue br2 grow" onClick={this.open}>Show Details</button>
                    }
        return(     
                   <div>
                <button className="bg-red br2 grow" onClick={this.close}>Hide Details</button>                  
                      <h5>Gender:{info.gender}</h5>
                      <h5>Date of Birth:{info.birth_year}</h5>                  
                   </div>
               )
}}
export default CharInfo;