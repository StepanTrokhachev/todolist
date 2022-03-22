Ext.define('ToDo.view.main.Task.TaskWindow.TaskWindowController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.taskWindow',

    clickClose: function (button) {
        button.up('window').close();

    },
    ClickCreateTask: function (button) {
        let gridTaskStore = Ext.ComponentQuery.query('#taskGrid')[0].getStore();
        // let params = {
        //     id: null,
        //     name: button.up('#TaskWindow').down('#name').getValue(),
        //     clients: button.up('#TaskWindow').down('#client').getValue(),
        //     date: button.up('#TaskWindow').down('#date_of_create').getSubmitValue(),
        //     deadline: button.up('#TaskWindow').down('#deadline').getSubmitValue(),
        // }
        let params = {
            name: this.getViewModel().data.TaskWindow.name,
            clients: this.getViewModel().data.TaskWindow.clients,
            date: this.getViewModel().data.TaskWindow.dateofcreate,
            deadline: this.getViewModel().data.TaskWindow.deadline
        }
        debugger;
            Ext.Ajax.request({
                url: 'http://localhost:63342/PROJECTPHP/newdir/ToDoList/src/api.php?act=Task&method=save',
                method: 'POST',
                jsonData: JSON.stringify(params),
                success: function () {
                    Ext.Msg.alert('good job');
                    gridTaskStore.reload()
                    button.up("window").close()
                },
                failure: function () {
                    Ext.Msg.alert('Ты в говне');
                }
            })

        }
    });
