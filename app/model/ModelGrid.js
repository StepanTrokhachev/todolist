Ext.define('ToDo.model.ModelGrid', {
    extend: 'Ext.data.Model',
    fields:
        [
            {name: 'id', type: 'int'},
            {name: 'name', type: 'string'},
            {name: 'user', type: 'string'},
            {name: 'dateOfCreate', type: 'string'},
            {name: 'deadline', type: 'string'},
        ]
});