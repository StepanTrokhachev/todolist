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
        Ext.create('ToDo.view.main.User.DeleteUser.DeleteWin', {
            viewModel: {
                data: {
                    userId: UserId,
                }
            }
        }).show()

    },

});
