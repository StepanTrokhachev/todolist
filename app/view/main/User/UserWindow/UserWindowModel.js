Ext.define('ToDo.view.main.User.UserWindow.UserWindowModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.UserWindow',

    data: {
        userWindow: {}
    },
    formulas: {
        isDisabledCreatePurchaseButton: {
            bind: {
                bindTo: '{userWindow}',
                deep: true
            },
            get: function (record) {
                console.log(record);
                debugger;
            },
        }
    }

});