const form = document.getElementById("form")
const spokenBox = document.getElementById("spoken")



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

if (SpeechRecognition) {
    console.log("Your browser supports speech Recognition")
    form.insertAdjacentHTML("beforeend", '<button type="button" id="mic">MIC</button>')
    const mic = document.getElementById("mic")
    // recognition.continuous = true //only set this if you want multiple speec results

    const recognition = new SpeechRecognition()

    mic.addEventListener('click', micButtonHandler) 

    function micButtonHandler() {
        mic.innerText === "MIC" ? mic.innerText = "Recording" : mic.innerText = "MIC"
        if (mic.innerText === "Recording") {
            mic.style.color = 'red'
            recognition.start()
        } else {
            recognition.stop()
            mic.style.color = defaultStatus
        }
    }

    recognition.addEventListener("start", startSpeechRecognition)
    function startSpeechRecognition() {
        console.log("speech recognition Active")
    }

    recognition.addEventListener("end", endSpeechRecognition)
    function endSpeechRecognition() {
        console.log("speech recognition Stopped")
    }

    recognition.addEventListener('result', resultSpeechHandler) 
    function resultSpeechHandler(e) {
        const transcript = e.results[0][0].transcript
        spokenBox.value = transcript
        console.log(e)
        console.log(transcript)
    }


} else {
    console.log("Your browser does not support speech Recognition")
}

