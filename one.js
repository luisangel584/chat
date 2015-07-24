angular.module("myApp", ["firebase"])

.controller("MyController", ["$scope", "$firebaseArray",
    function($scope, $firebaseArray) {
        //Arreglo BD
        var ref = new Firebase("https://listatareas-lcouoh.firebaseio.com/demo");

        // Arreglo de mensajes
        $scope.messages = $firebaseArray(ref);

        //Agregar
        $scope.addMessage = function(e) {

            //Esperar Enter
            if (e.keyCode === 13 && $scope.msg) {
                //ALLOW CUSTOM OR ANONYMOUS USER NAMES
                var name = $scope.name || "Nene no identificado";

                //Agregar
                $scope.messages.$add({
                    from: name,
                    body: $scope.msg,
                    date: new Date()
                });

                //Limpiar
                $scope.msg = "";
            }
        }

        $scope.enviar = function(){
            var name = $scope.name || "Nene no identificado";

            //Agregar
            $scope.messages.$add({
                from: name,
                body: $scope.msg
            });

            //Limpiar
            $scope.msg = "";
        }
    }
]);

