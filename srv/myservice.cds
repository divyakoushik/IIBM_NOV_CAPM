//Service definition
using { divya.db.master  } from '../db/datamodel';
 
service MyService @(path: 'MyService') {
 
    function hello(name: String) returns String;
 
    entity EmployeeSrv as projection on master.employees;
 
}