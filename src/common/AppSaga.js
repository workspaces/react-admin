let globalSagas = [];

class AppSaga {
    sagas = globalSagas;
    /**
     * 注册saga
     */
    registerSaga = (saga) => {
        this.sagas.push(saga);
    }

    /**
     * 获取sagas
     */
    getSagas = () => {
        return this.sagas;
    }

}

export default AppSaga;