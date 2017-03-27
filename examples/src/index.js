import React, { Component ,PropTypes} from 'react';
import ReactDom from 'react/lib/ReactDOM';
import {Steps} from '../../src/index.js';
class Demo extends Component{

    constructor(props,context){
        super(props,context);
        this.state={
            index:0,
            list:['合作信息','公司信息','资质信息','资质信息']
        };
    }

    componentDidMount(){
        let _this=this;
        setTimeout(function(){
           _this.setState({
               list:['合作信息','公司信息','资质信息','资质信息','公司信息','资质信息','资质信息']
           });
        },2000);
    }
    toggleIndex(str,index){
        this.setState({
            index
        });
    }
    render(){
        return (
            <div style={{margin:'20px 50px'}}>
                <Steps
                    clickCallback={::this.toggleIndex}
                    list={this.state.list}
                    currentStep={this.state.index}>
                </Steps>
            </div>
        )
    }
}



ReactDom.render(
<Demo></Demo>,
    document.getElementById('root')
);