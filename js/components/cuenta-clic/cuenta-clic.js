angular.module("cuentaClic", [])
.controller("cuentaClicController", function()
{
	var vm = this;
	vm.clics = 0;

	vm.increment = function()
	{
		vm.clics ++;
	}
  	// show_form = false;
  	// this.showUserList = function()
  	// {
  	// 	this.show_form = true;
  	// 	console.log("showUserList");
  	// },
  	// this.showUserDetails = function()
  	// {
  	// 	this.show_form = false;
  	// 	console.log("showUserDetails");
  	// },
  	// this.cancel = function()
  	// {
  	// 	this.show_form = false;
  	// 	console.log("cancel");
  	// }
})
.component("cuentaClic", {
  templateUrl: "./js/components/cuenta-clic/cuenta-clic.html",
  controller: "cuentaClicController"
});
