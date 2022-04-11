Ext.define('ToDo.view.main.User.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user',

    clickCraete: function () {
        Ext.create('ToDo.view.main.User.UserWindow.UserWindow', {
            viewModel: {
                data: {
                    action: 'Create',
                    userWindow: {
                        id: null,
                        name: null,
                    }
                }
            }
        }).show()
    },

    createPdf: function () {
        window.open('http://localhost:63342/PROJECTPHP/newdir/ToDoList/src/api.php?act=Client&method=createPdf')
    }
});

