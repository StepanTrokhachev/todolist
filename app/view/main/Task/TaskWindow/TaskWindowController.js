Ext.define('ToDo.view.main.Task.TaskWindow.TaskWindowController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.taskWindow',

    clickClose: function (button) {
        button.up('window').close();

    },
});
