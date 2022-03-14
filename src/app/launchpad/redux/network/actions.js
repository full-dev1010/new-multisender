const actions = {
    COLLPSE_CHANGE: 'COLLPSE_CHANGE',
    SET_NETWORK_TYPE: 'SET_NETWORK_TYPE',
    toggleCollapsed: () => ({
        type: actions.COLLPSE_CHANGE,
    }),
    setNetworkType: (data) => ({
        type: actions.SET_NETWORK_TYPE,
        data,
    }),
};                         
export default actions;
