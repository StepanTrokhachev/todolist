Ext.define('ToDo.view.main.Task.TaskWindow.TaskWindow', {
    extend: 'Ext.window.Window',
    xtype: 'window',

    layout: 'vbox',
    width: 500,
    height: 350,
    bodyPadding: 10,
    requires: [
        'ToDo.view.main.Task.TaskWindow.TaskWindowController',
        'ToDo.view.main.Task.TaskWindow.TaskWindowModel'
    ],
    bind:{
        title: '{action}' + ' User',
    },
    controller:'taskWindow',
    viewModel:"viewTaskWindow",
    closable:false,
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'name',
            width: "100%" ,
            bind:{
                value:"{TaskWindow.name}" ,
            }


        },
        {
            xtype: 'combobox',
            fieldLabel: 'Assigned Users',
            name: 'user',
            width: "100%" ,
            bind:{
                value:"{TaskWindow.user}" ,
            }
        },
        {
            xtype: 'datefield',
            fieldLabel: 'Date of create',
            name: 'date',
            format: 'd.m.Y',
            width: "100%" ,
            bind:{
                value:"{TaskWindow.date}" ,
            }
        },
        {
            xtype: 'datefield',
            fieldLabel: 'DeadLine',
            name: 'deadline',
            format: 'd.m.Y',
            width: "100%" ,
            bind:{
                value:"{TaskWindow.deadline}" ,
            }

        },


    ],
    buttons:
        [
        {
            scale: 'large',
            style: 'background-color: grey;',
            border:0,
            handler: 'clickCraeteLine',
            bind: {
                text: "{action}"
            }

        },
        {
            text: 'Close',
            scale: 'large',
            style: 'background-color: grey;',
            border:0,
            handler: 'clickClose'

        }

    ],

});