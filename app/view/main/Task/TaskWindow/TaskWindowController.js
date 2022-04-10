Ext.define('ToDo.view.main.Task.TaskWindow.TaskWindowController', {
    extend: 'ToDo.view.main.MainController',

    alias: 'controller.taskWindow',

    clickClose: function (button) {
        button.up('window').close();
    },

    ClickCreateTask: function (button) {
        let me = this
        const createTask = this.getView();
        this.mask(createTask);
        let gridTaskStore = Ext.ComponentQuery.query('#taskGrid')[0].getStore();
        let taskWindow = button.up('#TaskWindow');
        let params = {
            id: this.getViewModel().data.TaskWindow.id,
            name: this.getViewModel().data.TaskWindow.name,
            clients: this.getViewModel().data.TaskWindow.userIds,
            dateOfCreate: taskWindow.down('#dateOfCreate').getSubmitValue(),
            deadline: taskWindow.down('#deadline').getSubmitValue(),
        }
        Ext.Ajax.request({
            url: 'http://localhost:63342/PROJECTPHP/newdir/ToDoList/src/api.php?act=Task&method=save',
            method: 'POST',
            jsonData: JSON.stringify(params),
            success: function () {
                me.unmask(createTask);
                gridTaskStore.reload()
                button.up("window").close()
            },
            failure: function (error) {
                Ext.Msg.alert(JSON.parse(error.responseText)['errMsg']);
                me.unmask(createTask);
            }
        })
    }
});
