Ext.define('ToDo.view.main.User.UserWindow.UserWindowController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.userWindow',

    clickClose: function (button) {
        button.up('window').close();

    },
    ClickCreateUser: function (button) {
        let gridUsersStore = Ext.ComponentQuery.query('#UserGrid')[0].getStore();
        let params = {
            id: null,
            name: button.up('#userWindow').down('#userName').getValue()
        }
        Ext.Ajax.request({
            url: 'http://localhost:63342/PROJECTPHP/newdir/ToDoList/src/api.php?act=Client&method=save',
            method: 'POST',
            jsonData: JSON.stringify(params),
            success: function () {
                Ext.Msg.alert('Добавлен новый пользователь');
                gridUsersStore.reload()
                button.up("window").close()
            },
            failure: function () {
                Ext.Msg.alert('Ты в говне');
            },

        })
    }

});
