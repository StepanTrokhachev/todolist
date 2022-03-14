Ext.define('ToDo.store.UserWindowStore', {
    extend: 'Ext.data.Store',
    fields:[ 'id', 'user',],
    alias: 'store.UserWindowStore',
    data: {
        items: [
            {id: '1', user: 'Alex', },
            {id: '2', user: 'Petr', },
            {id: '3', user: 'Lox', },
        ],
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }

});