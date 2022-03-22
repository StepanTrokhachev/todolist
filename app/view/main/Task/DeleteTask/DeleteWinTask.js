Ext.define('ToDo.view.main.Task.DeleteTask.DeleteWinTask', {
    extend: 'Ext.window.Window',
    xtype: 'deleteWindowTask',
    layout: 'vbox',
    width: 400,
    height: 100,
    bodyPadding: 10,
    closable:false,
    title: 'Are you sure?',
    requires: [
        'ToDo.view.main.Task.DeleteTask.DeleteWinTaskController',
        'ToDo.view.main.Task.DeleteTask.DeleteWinTaskModel',
    ],
    controller:'deleteWinTask',
    viewModel:'deleteWinTask',
    buttons:
        [
            {
                text: 'Yes',
                scale: 'large',
                style: 'background-color: grey;',
                border:0,
                handler: 'ClickDeleteTask', // function for remote


            },
            {
                text: 'No',
                scale: 'large',
                style: 'background-color: grey;',
                border:0,
                handler: 'onclickCloseTask'

            }

        ],
})