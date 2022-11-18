const purchase = {
    namespaced : true,
    state : {
        answer: {},
    },
    mutations : {
        setAnswer(state, payload) {
            state.answer = payload
        },
    },
    getters : {
        getAnswer(state) {
            return state.answer
        },
    }
};

export default purchase;