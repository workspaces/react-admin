let globalReducers = {};

class AppReducer {
    reducers = globalReducers;
    /**
     * 注册reducer
     */
    registerReducer = (key, reducer) => {
        Object.assign(this.reducers, {[key]: reducer});
    }

    /**
     * 获取reducers
     */
    getReducers = () => {
        return this.reducers;
    }

}

export default AppReducer;