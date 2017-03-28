/**
 * Created by mac on 16/5/9.
 */

'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../css/Steps.less');

var Steps = (function (_Component) {
    _inherits(Steps, _Component);

    function Steps() {
        _classCallCheck(this, Steps);

        _Component.apply(this, arguments);
    }

    Steps.prototype.renderSteps = function renderSteps() {
        var _props = this.props;
        var currentStep = _props.currentStep;
        var list = _props.list;
        var _this = this;
        if (currentStep > list.length) {
            currentStep = list.length;
        }
        return list.map(function (str, index) {
            //从1开始计数
            index += 1;
            var gap = index - currentStep;
            return _react2['default'].createElement(
                'span',
                {
                    onClick: function () {
                        if (_this.props.readOnly) {
                            return;
                        }
                        _this.props.clickCallback(str, index);
                    },
                    className: 'step-item ' + (gap > 0 ? 'not-start' : gap == 0 ? 'active' : 'done') },
                _react2['default'].createElement('i', null),
                _react2['default'].createElement(
                    'span',
                    { className: 'item-content' },
                    str
                )
            );
        });
    };

    Steps.prototype.componentDidMount = function componentDidMount() {
        this.calculatePosition();
        window.onresize = this.calculatePosition.bind(this);
    };

    Steps.prototype.componentDidUpdate = function componentDidUpdate() {
        this.calculatePosition();
    };

    Steps.prototype.calculatePosition = function calculatePosition() {
        var stepContainer = this.refs.stepsContainer,
            containerWidth = stepContainer.clientWidth,
            stepItems = stepContainer.querySelectorAll('.step-item');
        var gap = containerWidth / (stepItems.length - 1).toFixed();
        stepItems.forEach(function (item, index) {
            item.style.left = index * gap - item.clientWidth / 2 + 'px';
        });
    };

    Steps.prototype.render = function render() {
        return _react2['default'].createElement(
            'div',
            { ref: 'stepsContainer', className: 'eg-steps-container' + (this.props.readOnly ? ' read-only' : '') },
            this.renderSteps(),
            _react2['default'].createElement('div', { className: 'hr' })
        );
    };

    _createClass(Steps, null, [{
        key: 'propTypes',
        value: {
            //是否为只读模式（只读模式不会触发点击回调），默认为false
            readOnly: _react.PropTypes.bool,
            //steps内容数组，把每一步的文案放入数组中作为list的值
            list: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
            //当前处于第几步，默认为0，也就是说所有的步骤都没有开始，如果到第一步的话将currentStep设置为1即可，注意currentStep不可以超过list数组长度
            currentStep: _react2['default'].PropTypes.number,
            clickCallback: _react2['default'].PropTypes.func

        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            readOnly: false,
            list: [],
            currentStep: 0,
            clickCallback: function clickCallback() {}
        },
        enumerable: true
    }]);

    return Steps;
})(_react.Component);

exports['default'] = Steps;
module.exports = exports['default'];