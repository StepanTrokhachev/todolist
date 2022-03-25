Ext.define('ToDo.view.main.User.DeleteUser.DeleteWinController', {
    extend: 'ToDo.view.main.MainController',
    alias: 'controller.deleteWin',

    onclickCloseUser: function (button) {
        button.up('deleteWindowUser').close();
    },

    clickDeleteUser: function (button) {
        let me = this;
        const createNewRequest = this.getView();
        this.mask(createNewRequest);
        let gridUsersStore = Ext.ComponentQuery.query('#UserGrid')[0].getStore();
        let params = {
            id: this.getViewModel().get('userId')
        }

        Ext.Ajax.request({
            url: 'http://localhost:63342/PROJECTPHP/newdir/ToDoList/src/api.php?act=Client&method=deleteUser',
            method: 'POST',
            jsonData: JSON.stringify(params),
            success: function () {
                me.unmask(createNewRequest);
                gridUsersStore.reload()
                button.up("deleteWindowUser").close()
            },
            failure: function () {
                me.unmask(createNewRequest);
                button.up("deleteWindowUser").close()
            }
        })
    }
})