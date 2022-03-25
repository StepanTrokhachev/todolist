Ext.define('ToDo.view.main.Task.TaskController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.task',
    clickCraete: function () {
        Ext.create('ToDo.view.main.Task.TaskWindow.TaskWindow', {
            viewModel: {
                data: {
                    action: 'Create',
                    TaskWindow: {}
                }
            }
        }).show()
    }
});

