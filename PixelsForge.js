window.pf.hi = () => {
    console.warn("P1X3LF0RG3 1NJ3K7ED");
}

let eventManager = null

window.pf.setEventManager = (em) => {
    eventManager = em
    console.log("Event manager just registered!", em)
}

const craftItem = (event, data) => {
    eventManager.emitEventNow(event, data)
}

window.handleRoomUpdates = (state) => {
    console.log("New room update: ", state)
}
/*
const main = () => {
    if (userEnabledAutoCraft) {
        // ...
        // do random things and then craft
        craftItem('clickEntity', {
            mid: windmill_id,
            impact: "startCraft",
            entity: "ent_windmill",
            inputs: "ath_flour"
        })
    
    }
}
*/