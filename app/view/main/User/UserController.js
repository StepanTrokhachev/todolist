Ext.define('ToDo.view.main.User.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user',
    clickCraete: function () {
        Ext.create('ToDo.view.main.User.UserWindow.UserWindow', {
            viewModel: {
                data: {
                    action: 'Create',
                }
            }
        }).show()
    }
});

