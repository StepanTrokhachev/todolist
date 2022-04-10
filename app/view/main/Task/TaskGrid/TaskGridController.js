Ext.define('ToDo.view.main.Task.TaskGrid.TaskGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.taskgrid',

    onClickChange: function (item) {
        let rowRecords = item.getSelectionModel().getSelection()[0];
        let userIds = [];
        if (typeof rowRecords.data.clients !== 'undefined')
            rowRecords.data.clients.forEach(user => {
                userIds.push(user.id)
            })

        rowRecords.data.userIds = userIds;
        Ext.create('ToDo.view.main.Task.TaskWindow.TaskWindow', {
            viewModel: {
                data: {
                    TaskWindow: rowRecords.data,
                    action: 'Update',
                }
            }
        }).show()
    },

    onClickDeleteTask: function (grid, rowIndex, colIndex) {
        let TaskId = grid.getStore().getRange()[rowIndex].get('id')
        Ext.Msg.show({
            title: 'Are you sure?',
            message: 'До сих пор уверен?',
            buttons: Ext.Msg.YESNO,
            fn: function (btn) {
                if (btn === 'yes') {
                    let gridTasksStore = Ext.ComponentQuery.query('#taskGrid')[0].getStore();
                    let params = {
                        id: TaskId
                    }
                    Ext.Ajax.request({
                        url: 'http://localhost:63342/PROJECTPHP/newdir/ToDoList/src/api.php?act=Task&method=deleteTask',
                        method: 'POST',
                        jsonData: JSON.stringify(params),
                        success: function () {
                            gridTasksStore.reload()
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
        });
    },

});
