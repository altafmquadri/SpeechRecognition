const activity = document.getElementById('item')

const addButton = document.getElementById('add')
addButton.addEventListener('click', addButtonHandler)
function addButtonHandler(e) {
    let ul = document.getElementsByClassName('todo')[0]
    let li = document.createElement('li')
    // only append to the ul if value is not blank
    if (e.target.previousElementSibling.value !== ""){
        ul.appendChild(li)
        li.innerText = e.target.previousElementSibling.value
        li.insertAdjacentHTML('afterbegin', `<div class="buttons">
        <button class="remove">-</button>
        <button class="complete">+</button>
        <button>MIC</button>
        </div>`)
        e.target.previousElementSibling.value = ""
    }
}//end addButton Handler

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
if (SpeechRecognition) {
    console.log("Your browser supports speech Recognition")
    let header = document.getElementsByTagName('header')[0]
    header.insertAdjacentHTML('beforeend', '<button id="mic">MIC</button>')
    
    const recognition = new SpeechRecognition()
    const micButton = document.getElementById("mic")

    micButton.addEventListener('click', micButtonHandler)

    function micButtonHandler(e){
        console.log('mic')
        micButton.innerText === "MIC" ? micButton.innerText = "REC" : micButton.innerText = "MIC"
        if (micButton.innerText === 'REC'){
            recognition.start()
        } else {
            recognition.stop()
        }
    }//end micButtonHandler

    //start speech
    recognition.addEventListener("start", startSpeechHandler)
    function startSpeechHandler(e) {
        console.log('Speech Active')
    }

    //end speech
    recognition.addEventListener('end', endSpeechHandler)
    function endSpeechHandler(e) {
        console.log("Speech Stopped")
    }

    //transcribe speech
    recognition.addEventListener('result', resultSpeechHandler)
    function resultSpeechHandler(e){
        activity.value = e.results[0][0].transcript
        console.log(e)
    }
} else {
    console.log("Your browser does not support speech Recognition")
}










