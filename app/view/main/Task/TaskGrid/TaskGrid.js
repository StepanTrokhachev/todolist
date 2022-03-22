Ext.define('ToDo.view.main.Task.TaskGrid.TaskGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'taskGrid',
    itemId: 'taskGrid',
    layout: 'column',
    width: "100%",
    requires: [
        'ToDo.view.main.Task.TaskGrid.TaskGridController'
    ],
    store: {
        type: 'TaskWindowStore'
    },
    controller: 'taskgrid',
    columns: [
        {
            xtype: 'rownumberer',
            text: 'id',
            dataIndex: 'id'
        },
        {
            text: 'Name',
            dataIndex: 'name',
            flex: 1
        },
        {
            text: 'Users',
            dataIndex: 'clients',
            flex: 1,
            renderer: function (value) {
                let str = '';
                if (typeof value !== 'undefined') {
                    value.forEach(item => {
                        str += str === '' ? item.name : ', ' + item.name
                    });
                }

                return str;
            }
        },
        {
            text: 'Date of Create',
            dataIndex: 'dateofcreate',
            flex: 1,
        },
        {
            text: 'Deadline',
            dataIndex: 'deadline',
            flex: 1,

        },
        {
            align: 'center',
            xtype: 'actioncolumn',
            flex: 0.5,
            items: [
                {
                    xtype: 'button',
                    itemId: 'delBtn',
                    iconCls: 'x-btn-delete',
                    handler: 'onClickDeleteTask'
                }
            ]
        }],
    listeners: {
        celldblclick: "onClickChange",

    }

});
