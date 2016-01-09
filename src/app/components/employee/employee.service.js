(function(){
  'use strict';

  angular
    .module('angularMaterialDemoScss')
    .service('ContactService', ContactService);

    function ContactService($log){
      var uid = 4;
      var contacts = [{
        id: 0,
        'name': 'Viral',
        'email': 'hello@gmail.com',
        'salary' : 10000,
        'phone': '123-234-4004'
      },
        {
          id: 1,
          'name': 'Viral1',
          'email': 'hello11@gmail.com',
          'salary' : 10000,
          'phone': '123-234-4004'
        },
        {
          id: 2,
          'name': 'Viral2',
          'email': 'hello22@gmail.com',
          'salary' : 10000,
          'phone': '123-234-4004'
        },
        {
          id: 3,
          'name': 'Hello',
          'email': 'hello2ffff2@gmail.com',
          'salary' : 100003,
          'phone': '123-534-4004'
        }];

      this.save = save;
      this.get = get;
      this.deletedata = deletedata;
      this.list = list;
      this.setEmployee = setEmployee;
      this.getEmployee = getEmployee;

      function save(contact) {
        if (contact.id == null) {
          //if this is new contact, add it in contacts array
          contact.id = uid++;
          contacts.push(contact);
        } else {
          //for existing contact, find this contact using id
          //and update it.
          for (var i in contacts) {
            if (contacts[i].id == contact.id) {
              contacts[i] = contact;
            }
          }
        }
        //return data;
      }

      //simply search contacts list for given id
      //and returns the contact object if found
      function get(id) {
        for (var i in contacts) {
          if (contacts[i].id == id) {
            return contacts[i];
          }
          $log.info("-----",contacts);
        }
      }

      //iterate through contacts list and delete
      //contact if found
      function deletedata(id) {
        for (var i in contacts) {
          if (contacts[i].id == id) {
            contacts.splice(i, 1);
          }
        }
      }

      //simply returns the contacts list
      function list() {
        return contacts;
      }

      var empObj = {};
      function setEmployee(obj){
        empObj = obj;
      }

      function getEmployee(){
        return empObj;
      }

      return {
        save: save,
        list: list,
        deletedata : deletedata,
        get : get,
        setEmployee : setEmployee,
        getEmployee : getEmployee
      };

    }
})();
