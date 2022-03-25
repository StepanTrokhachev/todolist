Ext.define('ToDo.view.main.User.DeleteUser.DeleteWin', {
    extend: 'Ext.window.Window',
    xtype: 'deleteWindowUser',
    layout: 'vbox',
    width: 400,
    height: 100,
    bodyPadding: 10,
    closable: false,
    title: 'Are you sure?',
    requires: [
        'ToDo.view.main.User.DeleteUser.DeleteWinController',
        'ToDo.view.main.User.DeleteUser.DeleteWinModel'
    ],
    viewModel: "deleteWin",
    controller: "deleteWin",

    buttons:
        [
            {
                text: 'Yes',
                scale: 'large',
                style: 'background-color: grey;',
                border: 0,
                handler: 'clickDeleteUser',
            },
            {
                text: 'No',
                scale: 'large',
                style: 'background-color: grey;',
                border: 0,
                handler: 'onclickCloseUser'
            }
        ],
});