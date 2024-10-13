document.getElementById('myButton').addEventListener('click', async function() {
    let response = await fetch("/api/volume")

    document.getElementById('message').innerText = response.text;
});
