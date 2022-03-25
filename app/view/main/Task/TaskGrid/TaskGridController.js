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
        Ext.create('ToDo.view.main.Task.DeleteTask.DeleteWinTask', {
            viewModel: {
                data: {
                    taskId: TaskId,
                }
            }
        }).show()
    },

});
