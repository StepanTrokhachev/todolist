Ext.define('ToDo.view.main.User.UserGrid.UserGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usergrid',


    onClickChange: function (item) {
        let rowRecords = item.getSelectionModel().getSelection()[0];
        Ext.create('ToDo.view.main.User.UserWindow.UserWindow', {
            viewModel: {
                data: {
                    UserWindow: rowRecords.data,
                    action: 'Update',
                }
            }
        }).show()
    },

    onClickDeleteUser: function (grid, rowIndex, colIndex) {
        let UserId = grid.getStore().getRange()[rowIndex].get('id')
        Ext.Msg.show({
            title: 'Are you sure?',
            message: 'До сих пор уверен?',
            buttons: Ext.Msg.YESNO,
            fn: function (btn) {
                if (btn === 'yes') {
                    let gridUsersStore = Ext.ComponentQuery.query('#UserGrid')[0].getStore();
                    let params = {
                        id: UserId
                    }
                    Ext.Ajax.request({
                        url: 'http://localhost:63342/PROJECTPHP/newdir/ToDoList/src/api.php?act=Client&method=deleteUser',
                        method: 'POST',
                        jsonData: JSON.stringify(params),
                        success: function () {
                            gridUsersStore.reload()
                        },
                        failure: function () {
                            Ext.Msg.show({
                                title: 'Error',
                                buttons: Ext.Msg.OK,
                            })
                        }
                    })
                }
            }
        })
    },

});
