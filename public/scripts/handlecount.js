function addCount() {
    socket.emit("add")
}

socket.on('brodcastAdd', function(msg) {
    const element = document.getElementById("value");
    element.innerHTML = msg.value;
})