// perpanjangan dari web worker
addEventListener("message", function(message) {
    let data = message.data;
    for(let i =0; i< data; i++){
        this.postMessage(i);
    }
})