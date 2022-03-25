Ext.define('ToDo.view.main.User.UserWindow.UserWindowController', {
    extend: 'ToDo.view.main.MainController',

    alias: 'controller.userWindow',

    clickClose: function (button) {
        button.up('window').close();
    },

    clickCreateUser: function (button) {
        let me = this;
        const createNewRequest = this.getView();
        this.mask(createNewRequest);
        let gridUsersStore = Ext.ComponentQuery.query('#UserGrid')[0].getStore();
        Ext.Ajax.request({
            url: 'http://localhost:63342/PROJECTPHP/newdir/ToDoList/src/api.php?act=Client&method=save',
            method: 'POST',
            jsonData: JSON.stringify(this.getViewModel().data.UserWindow),
            success: function () {
                me.unmask(createNewRequest);
                gridUsersStore.reload()
                button.up("window").close()
            },
            failure: function (erorr) {
                debugger
                Ext.Msg.alert(JSON.parse(erorr.responseText)['errMsg']);
                me.unmask(createNewRequest);
            },
        })
    }

});
