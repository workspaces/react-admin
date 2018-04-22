import { connect } from 'react-redux';
import AppReducer from './AppReducer';
import AppSaga from './AppSaga';
import * as actions from './AppAction';

class AppPage {

  /**
   * 模块名称后期扩展
   * @param {页面名称} pageName 
   * @param {模块名称} moduleName 
   */
  constructor(pageName, moduleName = '') {
    this.pageName = pageName;
    this.moduleName = moduleName;
    this.appReducer = new AppReducer();
    this.appSaga = new AppSaga();
  }

  /**
   * 注册reducer
   */
  registerReducer = (key, reducer) => {
    this.appReducer.registerReducer(key, reducer);
  }

  /**
   * 注册saga
   */
  registerSaga = (saga) => {
    this.appSaga.registerSaga(saga);
  }

  mapStateToProps = (state, ownProps={}) => {
    // console.log(state);
    return {...ownProps, ...state[this.pageName]};
  }

  /**
   * 载入全局属性，请不要覆盖此方法
   */
  _mapStateToProps = (state, ownProps={}) => {
    const globalProps = {

    };
    const props = this.mapStateToProps(state, ownProps);
    return {...globalProps, ...props};
  }

  /**
   * 定义事件需要覆盖此方法
   */
  mapDispatchToProps = (dispatch, ownProps={}) => {
    return {...ownProps};
  }

  /**
   * 载入全局事件,请不要覆盖此方法
   */
  _mapDispatchToProps = (dispatch, ownProps={}) => {
    const globalEvents = {

    };
    const events = this.mapDispatchToProps(dispatch, ownProps);
    return Object.assign(globalEvents, events);
  }

  mergeProps = (stateProps, dispatchProps, ownProps={}) => {
    return {...ownProps, ...stateProps, ...dispatchProps};
  }

  getContainer = (component) => {
    return connect(this._mapStateToProps, this._mapDispatchToProps, this.mergeProps)(component);
  }
}

export default AppPage;