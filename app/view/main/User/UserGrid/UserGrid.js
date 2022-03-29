Ext.define('ToDo.view.main.User.UserGrid.UserGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'userGrid',
    itemId: 'UserGrid',
    layout: 'column',
    width: "100%",
    requires: [
        'ToDo.view.main.User.UserGrid.UserGridController',
        'ToDo.store.UserWindowStore'
    ],
    store: {
        type: 'ToDo.store.UserWindowStore'
    },
    controller:'usergrid',
    columns: [
        {
            xtype: 'rownumberer',
            text: 'id',
            dataIndex: 'id'
        },

        {
            text: 'Users',
            dataIndex: 'name',
            flex: 1,
        },

        {
            align: 'center',
            xtype: 'actioncolumn',
            flex: 0.5,
            items: [
                {
                    xtype: 'button',
                    itemId:'delBtn',
                    iconCls: 'x-btn-delete',
                    handler: 'onClickDeleteUser'
                }
            ]
        }
    ],

    listeners: {
        celldblclick: "onClickChange",
    }

});
