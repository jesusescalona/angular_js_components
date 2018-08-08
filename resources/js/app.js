var app = angular.module('appHome', ['datatables']);
app.controller('appCtrlUsers', function($scope, $http)
{
   $scope.success = false;
   $scope.error = false;

   $scope.fetchData = function()
   {
      $http.get('includes/fetch_data.php').success(function(data)
      {
         $scope.namesData = data;
         console.log($scope.namesData);
      });
   };

   $scope.openModal = function()
   {
      var modal_popup = angular.element('#crudmodal');
      modal_popup.modal('show');
   };

   $scope.closeModal = function()
   {
      var modal_popup = angular.element('#crudmodal');
      modal_popup.modal('hide');
   };

   $scope.addData = function()
   {
      $scope.modalTitle = 'Add Data';
      $scope.submit_button = 'Insert';
      $scope.openModal();
   };

   $scope.submitForm = function()
   {
      $http({
         method:"POST",
         url:"includes/insert.php",
         data:{
                  'name': $scope.name,
                  'email': $scope.email,
                  'password': $scope.password,
                  'charge': $scope.charge,
                  'action': $scope.submit_button,
                  'id': $scope.hidden_id
               }
         }).success(function(data)
         {
            if(data.error != '')
            {
               $scope.success = false;
               $scope.error = true;
               $scope.errorMessage = data.error;
            }
            else
            {
               $scope.success = true;
               $scope.error = false;
               $scope.successMessage = data.message;
               $scope.form_data = {};
               $scope.closeModal();
               $scope.fetchData();
            }
      });
   };

   $scope.fetchSingleData = function(id)
   {
      $http({
         method:"POST",
         url:"includes/insert.php",
         data:{'id':id, 'action':'fetch_single_data'}
      }).success(function(data)
      {
         $scope.name = data.name;
         $scope.email = data.email;
         $scope.password = data.password;
         $scope.charge = data.charge;
         $scope.hidden_id = id;
         $scope.modalTitle = 'Edit Data';
         $scope.submit_button = 'Edit';
         $scope.openModal();
      });
   };

   $scope.deleteData = function(id)
   {
      if(confirm("Are you sure you want to remove it?"))
      {
         $http({
            method:"POST",
            url:"includes/insert.php",
            data:{'id':id, 'action':'Delete'}
         }).success(function(data)
         {
            $scope.success = true;
            $scope.error = false;
            $scope.successMessage = data.message;
            $scope.fetchData();
         });   
      }
   };
});

/*var appHome = angular.module('appHome', ['ngMap']);

appHome.factory('getDataJson', function( $http )
{
   var dataJson =
   {
      getData: function()
      {
         return $http.get('http://localhost/PRUEBAS/ANGULAR/evaluacion/backend/v1/users').then(function(response)
         {
            return response.data;
         },
         function()
         {
            throw 'Error al consultar la data';
         });
      }
   };
   return dataJson;
});

appHome.controller('appCtrlUsers', function( $scope, getDataJson )
{
   $scope.users = null;
   getDataJson.getData().then( function( listUsers )
   {   
      $scope.clients = listUsers;
      var rowsUsers = new Array();
      var listTotal = new Array();
      // rowsUsers.pop();
      // listTotal.pop();
      //console.log( $scope.clients);

      for(var z in listUsers)
      {
         rowsUsers = listUsers[z].length;
         //console.log(rowsUsers);
         if(rowsUsers>0)
         {
            //console.log("HAY "+rowsUsers+" REGISTROS");
            for(var z=0;z<rowsUsers;z++)
            {
               listTotal.push(rowsUsers[z]);
               // {   
                  // username: rowsUsers[z].name,
                  // charge: rowsUsers[z].charge,
                  // email : rowsUsers[z].email
               // });
            }
            console.log(listTotal);
         }
         else
         {
            //console.log("NO HAY REGISTROS");
         }
      }
      $scope.totalUsers = listTotal;
      // $scope.users = listUsers;

      // var rowsUsers = new Array();
      // for(var z in listUsers)
      // {
      //    rowsUsers.push(
      //    {   
      //       username: listUsers[z].name,
      //       charge: listUsers[z].charge,
      //       email : listUsers[z].email
      //    });
      // console.log($scope.users);
      // }
      // $scope.userList = rowsUsers;
   });
});*/