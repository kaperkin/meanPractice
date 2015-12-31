//public/core.js

var scotchTodo = angular.module('scotchTodo', []);

//set the controller of the function (give the page the behaviour that it lacks)
function mainController($scope, $http) {
    // creates empty formData objects
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('api/todos')
        // on success...
        .success(function (data) {
            //assign data to the locally scoped variable of todos
            $scope.todos = data;
            // log out the data
            console.log(data);
        })
        // on error
        .error(function (data) {
            //log out the error
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the Node API
    $scope.createTodo = function () {
        // post formData to /api/todos url
        $http.post('/api/todos', $scope.formData)
            //on success
            .success(function (data) {
                $scope.formData = {}; //clear the form so our user is ready to enter another
                // set scope.todo to data
                $scope.todos = data;
                //log out data
                console.log(data);
            })
            //on error
            .error(function (data) {
                //log the error
                console.log('Error: ' + data);
            });
    };

    //delete a todo after checking it
    //function that takes todo id
    $scope.deleteTodo = function (id) {
        //calls http's 'delete' method on id url
        $http.delete('/api/todos/' + id)
            // on success
            .success(function (data) {
                //resets the todos to current data
                $scope.todos = data;
                //logs data
                console.log(data);
            })
            //on error
            .error(function (data) {
                //logs error
                console.log('Error: ' + data);
            });
    };
}