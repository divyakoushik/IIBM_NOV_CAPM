module.exports = (srv) => {
   
    srv.on('hello', (req) => {
        let myName = req.data.name;
        return "Hello Amigo " + myName;
    });
 
    const { employees } = cds.entities("divya.db.master");
 
    srv.on('READ', 'EmployeeSrv', async (req) => {
        const tx = cds.tx(req);
        var data = await tx.run(SELECT.from(employees).where({
            "Currency_code": "USD"
        }).limit(3));
       
 
        data.push({
            "ID":"Zkas",
            "nameFirst": "Anil",
            "nameLast": "Kapoor"
        });
     
        return data;
 
    });
 
}
    
    // module.exports = (srv) => {
   
//     srv.on('hello', (req) => {
//         let myName = req.data.name;
//         return "Hello Amigo " + myName;
//     });
 
//     const { EmployeeSrv } = cds.entities;
 
//     srv.on('READ', EmployeeSrv, (req) => {
//         return {
//             "ID": "ZUMBA"
//         };
//     });
// }