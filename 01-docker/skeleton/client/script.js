document.getElementById('myButton').addEventListener('click', async function() {
    let response = await fetch("/api/volume")
    response = await response.text()

    document.getElementById('message').innerText = response;
});
