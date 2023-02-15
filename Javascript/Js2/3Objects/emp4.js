let emp = {id:101, 
           firt_Name:"Rahul",
           last_Name:"gandi",
           email:"Rahul@.com",
           loc:['Banglore','Hydrabad','Dilhi'],
           sal:4500,
           designation:"Project Manager"
        }
        //console.log(emp.id)
        //wap to print all object values

        for (key in emp){
            console.log(emp[key])   // key values
           // console.log(key)      // key only
        }