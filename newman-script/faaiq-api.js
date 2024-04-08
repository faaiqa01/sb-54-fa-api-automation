const newman = require("newman")

newman.run({
    collection: "json-collection/faaiq.postman_collection.json",
    environment: "json-env/faaiq-env.json",
    reporters: ["cli", "htmlextra"]
})
