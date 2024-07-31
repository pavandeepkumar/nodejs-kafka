const { kafka } = require("./client")

async function init() {
    const admin = kafka.admin()
    console.log("admin connecting...")

    admin.connect()
    console.log(" admin kafka connected")
    console.log("Creating Topic...")
    await admin.createTopics({
        topics: [{
            topic: "rider-updates",
            numPartitions: 2
        }]
    })
    console.log("Topic created successfully")

    console.log("Disconnecting Admin ....")
    await admin.disconnect()
}
init()