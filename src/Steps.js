/**
 * Created by mac on 16/5/9.
 */

import React,{PropTypes,Component} from 'react';
import classnames from 'classnames';
require ('../css/Steps.less');

export default class Steps extends Component{
    static propTypes = {
        //是否为只读模式（只读模式不会触发点击回调），默认为false
        readOnly:PropTypes.bool,
        //steps内容数组，把每一步的文案放入数组中作为list的值
        list:React.PropTypes.arrayOf(React.PropTypes.string),
        //当前处于第几步，默认为0，也就是说所有的步骤都没有开始，如果到第一步的话将currentStep设置为1即可，注意currentStep不可以超过list数组长度
        currentStep:React.PropTypes.number,
        clickCallback:React.PropTypes.func

    };

    static defaultProps = {
        readOnly:false,
        list:[],
        currentStep:0,
        clickCallback:function(){}
    };

    renderSteps(){
        let {currentStep,list}=this.props,
            _this=this;
        if(currentStep>list.length){
            currentStep=list.length;
        }
        return list.map(function(str,index) {
            //从1开始计数
            index += 1;
            let gap = index - currentStep;
            return (
                <span
                    onClick={function(){
                        if(_this.props.readOnly){
                            return;
                        }
                        _this.props.clickCallback(str,index)
                    }}
                    className={'step-item '+(gap>0?'not-start':(gap==0?'active':'done'))}>
                    <i></i>
                    <span className='item-content'>
                        {str}
                    </span>
                </span>
            )
        })
    }
    componentDidMount(){
        this.calculatePosition();
        window.onresize=this.calculatePosition.bind(this);

    }
    componentDidUpdate(){
        this.calculatePosition();
    }
    calculatePosition(){
        let stepContainer=this.refs.stepsContainer,
            containerWidth=stepContainer.clientWidth,
            stepItems=stepContainer.querySelectorAll('.step-item');
        let gap=containerWidth/(stepItems.length-1).toFixed();
        stepItems.forEach(function(item,index){
            item.style.left=index*gap-item.clientWidth/2+'px';
        })
    }
    render(){
        return(<div ref='stepsContainer' className={'eg-steps-container'+(this.props.readOnly?' read-only':'')}>
            {this.renderSteps()}
            <div className='hr'></div>
        </div>)
    }
}

