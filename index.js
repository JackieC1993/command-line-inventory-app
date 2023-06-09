const inform = console.log;
const {readJSONFile, writeJSONFile } = require("./src/helper")
const { index, show, update, create,destroy, deleteCart,total} = require("./src/controller");


function run() {
    inform("Welcome to the Puurfect Store \n\n");


    let data = readJSONFile("data", "cart.json");
    let writeToFile = false;
    let updatedPurchases = [];

    const action = process.argv[2]; //action user typed in
    const purchase = process.argv[3]; //pets

    switch (action) {
        case "index":
            const petFun = index(data)
            inform(petFun);
            break;
        case "show":
            const travelShow = show(data, purchase)
            inform(travelShow);
            break;
        case "update":
            updatedPurchases = update(data,purchase, process.argv[4]);
             writeToFile = true;
             break;
        case "create":
           updatedPurchases = create(data,purchase);
            writeToFile = true;
            break;
        case "destroy":
            updatedPurchases = destroy(data,purchase);
             writeToFile = true;
            break;
        case "deleteCart":
            updatedPurchases = deleteCart(data,purchase);
            writeToFile = true;
            break;
        case "total":
             let totalPrice = total(data);
             inform (totalPrice)
            break;

        default: 
        inform("Hey, did you forget something, boss? Your cart is empty ");
        
    }
    if (writeToFile) {
    writeJSONFile("data", "cart.json", updatedPurchases);
    inform("Thank you. data have been updated");
    }

}
run()
