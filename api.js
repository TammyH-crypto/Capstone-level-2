function handleClick(event) {
    const promise = fetch("https://opentdb.com/api.php?amount=1&type=multiple");
    promise.then(parseResponse)
    }
    
    function parseResponse(resolveValue) {
    const promise =resolveValue.text();
    promise.then(viewResponse);
    }
    
    function viewResponse(resolveValue) {
       const response = JSON.parse(resolveValue); 
    }
    const trivia = `<div>${question}</div>
        <ol type="A">
        <li>${incorrects[0]}</li>
        <li>${incorrects[1]}</li>
        <li>${incorrects[2]}</li>
        <li>${answer}</li>
        </ol>`;
        output(trivia)
    