var resultField = document.getElementById("result");
var button = document.getElementById('button');

button.addEventListener('click', function(){
    var happy = document.getElementById("insert-text").value;
    isJoeHappy(happy, callback);    
});

function isJoeHappy(happy, callback){
    setTimeout(() => {
        const happyness = Math.random()
        if (happyness > happy) {
            callback(happyness);
        } else {
            callback(new Error("Joe is sad!"));
        }
    }, 2000);
};

function renderHTML(result) {
    if (document.getElementById("happiness-result") != null) {
        document.getElementById("happiness-result").remove();
    }

    var newElement = document.createElement("p");
    newElement.setAttribute("id", "happiness-result");
    
    if (typeof result !== "number") {
        newElement.innerHTML = "No!!! Joe is sad!";
        resultField.appendChild(newElement);
        document.getElementById("happiness-result").style.color='red';
    } else {
        newElement.innerHTML = `Yes! By ${(result*100).toFixed(2)} \%`;
        resultField.appendChild(newElement);
    }
}

let callback = (result) => {
    if (typeof result !== "number") {
        renderHTML(result);
        return;
    }
    renderHTML(result);
}