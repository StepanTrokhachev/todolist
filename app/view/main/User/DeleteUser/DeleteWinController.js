Ext.define('ToDo.view.main.User.DeleteUser.DeleteWinController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.deleteWin',


    onclickCloseUser: function (button) {
        button.up('deleteWindowUser').close();
    },


    ClickDeleteUser: function (button) {
        let gridUsersStore = Ext.ComponentQuery.query('#UserGrid')[0].getStore();
        let params = {
            id: this.getViewModel().get('userId')

        }
        Ext.Ajax.request({
            url: 'http://localhost:63342/PROJECTPHP/newdir/ToDoList/src/api.php?act=Client&method=deleteUser',
            method: 'POST',
            jsonData: JSON.stringify(params),
            success: function () {
                gridUsersStore.reload()
                button.up("deleteWindowUser").close()
            },
            failure: function () {
                button.up("deleteWindowUser").close()
            }
        })

    }

})