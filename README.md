# eg-steps

步骤组件，用于显示流程进行到第几步
```jsx
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

```


#### `<Steps>` Props:
- readOnly  是否为只读模式（只读模式不会触发点击回调），默认为false
- list  steps内容数组，把每一步的文案放入数组中作为list的值
并且提默认样式。数组中的每个item结构为{item:'',callback:function(){}},item既可以为string，也可以为react元素
- currentStep  当前处于第几步，默认为0，也就是说所有的步骤都没有开始，如果到第一步的话将currentStep设置为1即可，注意currentStep不可以超过list数组长度
- clickCallback  点击每一步的回调，function(str,index){} str为步骤名称，index为第几步（从1开始计数）


### Contributing

- Fork the project
- Run the project in development view demo: `$ npm run demo`
- Make changes.
- Add appropriate tests
- `$ npm run test`
- If tests don't pass, make them pass.
- Update README with appropriate docs.
- Rnn build
- `$ npm run build`
- Commit and PR.


