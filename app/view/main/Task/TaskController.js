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
    },

    createPdf: function () {
        window.open('http://localhost:63342/PROJECTPHP/newdir/ToDoList/src/api.php?act=Task&method=createPdf')
    }
});

