Ext.define('ToDo.view.main.Task.TaskWindow.TaskWindow', {
    extend: 'Ext.window.Window',
    xtype: 'window',
    itemId: 'TaskWindow',
    layout: 'vbox',
    width: 500,
    height: 350,
    bodyPadding: 10,
    requires: [
        'ToDo.view.main.Task.TaskWindow.TaskWindowController',
        'ToDo.view.main.Task.TaskWindow.TaskWindowModel',
    ],
    bind: {
        title: '{action}' + ' User',
    },

    controller: 'taskWindow',
    viewModel: "viewTaskWindow",
    closable: false,
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'name',
            itemId: 'name',
            width: "100%",
            bind: {
                value: "{TaskWindow.name}",
            }
        },
        {
            xtype: 'combo',
            fieldLabel: 'Assigned Users',
            multiSelect: true,
            name: 'user',
            width: "100%",
            itemId: 'client',
            store: 'ToDo.store.UserWindowStore',
            valueField: 'id',
            displayField: 'name',
            queryMode: 'local',
            bind: {
                value: "{TaskWindow.userIds}",
            },
        },
        {
            xtype: 'datefield',
            fieldLabel: 'Date of create',
            name: 'dateOfCreate',
            width: "100%",
            itemId: 'dateOfCreate',
            format: 'd.m.Y',
            bind: {
                value: "{TaskWindow.dateOfCreate}",
            },
        },
        {
            xtype: 'datefield',
            fieldLabel: 'DeadLine',
            name: 'deadline',
            format: 'd.m.Y',
            itemId: 'deadline',
            width: "100%",
            bind: {
                value: "{TaskWindow.deadline}",
            }
        },
    ],
    buttons:
        [
            {
                scale: 'large',
                style: 'background-color: grey;',
                border: 0,
                handler: 'ClickCreateTask',
                bind: {
                    text: "{action}"
                }
            },
            {
                text: 'Close',
                scale: 'large',
                style: 'background-color: grey;',
                border: 0,
                handler: 'clickClose'
            }
        ],
});