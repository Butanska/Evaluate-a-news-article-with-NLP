function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    console.log("::: Form Submitted :::")
    console.log(formText)
   
    fetch('http://localhost:8081/test', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            input: {
                url: `${formText}`
            }
        })
    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res); 
        document.getElementById('polarity').innerHTML = res.polarity;
        document.getElementById('polarityConfidence').innerHTML = res.polarity_confidence;
        document.getElementById('articleTxt').innerHTML = res.text;
    })
}

export { handleSubmit }
