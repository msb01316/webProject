const { MongoClient } = require("mongodb");

 

// Replace the following with your Atlas connection string                                                                                                                                        

const url = "mongodb+srv://GroupR:GroupR@cluster0.xgjznrs.mongodb.net/wikiBase?retryWrites=true&w=majority";

const client = new MongoClient(url);

 async function run() {

    try {

         await client.connect();

         console.log("Connected correctly to server");

         const db = client.db("wikiBase");

         // Use the collection "people"

         const data = db.collection("youWikis");

         // Construct a document                                                                                                                                                              

         let doc1 = {
            "title": "An oak Tree", 
            "img": "https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "text": "An oak is a tree or shrub in the genus Quercus (/'kwɜ:rkəs/; Latin \"oak tree\") of the beech family, Fagaceae. There are approximately 500 extant species of oaks. The common name \"oak\" also appears in the names of species in related genera, notably Lithocarpus (stone oaks), as well as in those of unrelated species such as Grevillea robusta (silky oaks) and the Casuarinaceae (she-oaks). The genus Quercus is native to the Northern Hemisphere, and includes deciduous and evergreen species extending from cool temperate to tropical latitudes in the Americas, Asia, Europe, and North Africa. North America has the largest number of oak species, with approximately 160 species in Mexico of which 109 are endemic and about 90 in the United States. The second greatest area of oak diversity is China, with approximately 100 species."
        }
        let doc2 = {"title": "A tabby cat",
            "img": "https://images.pexels.com/photos/13693648/pexels-photo-13693648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "text": "A tabby is any domestic cat (Felis catus) with a distinctive 'M'-shaped marking on its forehead; stripes by its eyes and across its cheeks, along its back, and around its legs and tail; and (differing by tabby type), characteristic striped, dotted, lined, flecked, banded, or swirled patterns on the body—neck, shoulders, sides, flanks, chest, and abdomen. \"Tabby\" is not a breed of cat, but a coat type seen in almost all genetic lines of domestic cats, regardless of status."
        }
        let doc3 = {"title": "A pile of potatoes. There are at least twenty of them visible.",
            "img": "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "text": "The potato is a starchy tuber of the plant Solanum tuberosum and is a root vegetable native to the Americas. The plant is a perennial in the nightshade family Solanaceae."
         }

         // Insert a single document, wait for promise so we can read it back

         const p = await data.insertOne(doc1);
         const m = await data.insertOne(doc2);
         const n = await data.insertOne(doc3);

         // Find one document

         const myDoc = await data.findOne();

         // Print to the console

         console.log(myDoc);

        } catch (err) {

         console.log(err.stack);

     }

     finally {

        await client.close();

    }

}

run().catch(console.dir);