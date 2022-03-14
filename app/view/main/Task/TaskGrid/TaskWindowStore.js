Ext.define('ToDo.store.TaskWindowStore', {
    extend: 'Ext.data.Store',
    fields:[ 'id', 'name', 'user','date','deadline',''],
    alias: 'store.TaskWindowStore',
    data: {
        items: [
            {id: '1', name: 'HomeWork', user: 'Alex', date: '11.03.2022', deadline: '15.03.2022',},
            {id: '2', name: 'Walk', user: 'Alex', date: '11.03.2022', deadline:'21.03.2022'},
            {id: '3', name: 'Go home', user: 'Alex', date:'11.03.2022', deadline: '22.03.2022'},
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
