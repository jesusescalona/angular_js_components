angular.module("userDetail", [])
.component("userDetail", {
  templateUrl: "./js/components/user-detail/user-detail.html",
  controller: function()
  {
    var vm = this;
    vm.cambiarEmail = function()
    {
      vm.usuario.email = "jes_escalona@hotmail.com";
    }
  },
  bindings:
  {
    usuario: "=",
    numero: "@"
  }
})
