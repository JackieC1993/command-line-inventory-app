const inform = console.log;
const {readJSONFile, writeJSONFile } = require("./src/helpers")
const { index, show, create, edit, destroy,} = require("./src/controller");


function run() {
    inform("Welcome to our  App \n\n");

    let styles = readJSONFile("data", "styles.json");
    console.log("the style from indexJS", styles)

    const action = process.argv[2]; //action user typed in
    const petsId = process.argv[3]; //pets
    let writeToFile = true;

    switch (action) {
        case "index":
            const petFun = index(styles)
            inform(petFun);
            break;
        case "show":
            const travelShow = show(styles, styleId)
            inform(travelShow);
            break;
        case "update":
            updatedPurchases = edit(styles, styleId, process.argv[4]);
             writeToFile = true;
             break;
        case "create":
            updatedStyle = create(styles, styleId);
            writeToFile = true;
            break;
        case "destroy":
            updatednewStyle = destroy(styles, styleId );
             writeToFile = true;
            break;

        default: 
        inform("Hey, did you forget something? Your cart is empty ");
        
    }
    if (writeToFile) {
    writeJSONFile("data", "styles.json", styles);
    inform("Thank you. Styles have been updated");
    }

}
run()
