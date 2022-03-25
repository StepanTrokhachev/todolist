Ext.define('ToDo.store.TaskWindowStore', {
    extend: 'Ext.data.Store',
    model: 'ToDo.model.ModelGrid',
    alias: 'store.TaskWindowStore',
    proxy: {
        type: 'ajax',
        url: 'http://localhost:63342/PROJECTPHP/newdir/ToDoList/src/api.php?act=Task&method=getTask',
        reader: {
            type: 'json',
        }
    },
    autoLoad: true
});
