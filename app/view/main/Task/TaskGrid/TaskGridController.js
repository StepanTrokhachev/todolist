Ext.define('ToDo.view.main.Task.TaskGrid.TaskGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.taskgrid',

    onClickChange: function (item) {
        debugger;
        let rowRecords = item.getSelectionModel().getSelection()[0];
        Ext.create('ToDo.view.main.Task.TaskWindow.TaskWindow', {
            viewModel: {
                data: {
                    TaskWindow: rowRecords.data,
                    action: 'Update',
                }
            }
        }).show()

    }

});
