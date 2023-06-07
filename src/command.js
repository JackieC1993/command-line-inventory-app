const fs = require('fs');

const add = (item, price){
   try{
     fs.readFileSync("groceryList.json");
   } catch (e) {
    console.log(e)
   }

    

}

module.exports = {
    add
}