//Learn with https://javascript.info/
//Quite fun haha https://learnjavascript.online/app.html

//Shortcut Commands to open console log in opera ctrl + shift + j


//Create a new list item when clicking on the Add btn
function addTask() {

    //Create a html element (<><>) node with the name li => <li><li>
    var li = document.createElement("li");

    //Gives the current value of input
    var inputValue = document.getElementById("userInput").value;

    //Create a textnode (viewable html text) which contains an element node - inputValue in this case
    var t = document.createTextNode(inputValue);


    var taskList = document.getElementById("taskList") //refers to ul
    var removeBtn = document.createElement("button"); //refers to creating a remove btn
    removeBtn.innerHTML = "X" //make X the label of the button

    if (inputValue === '') {
        //Throw error
        alert("Please type something!")
    }
    else {
        //Insert the element - t in the list item => <li>t<li>
        li.appendChild(t); //console.log(li)

        //Insert the list item into the unordered list (ul)
        taskList.append(li);

        //Inset a remove btn into the ul
        li.appendChild(removeBtn);
        //console.log(li)
    }
    //Clearing the user input after adding it to the list
    document.getElementById("userInput").value = "";

    //Detect if the removeBtn has been clicked
    removeBtn.addEventListener("click", function(){
        //Remove the list item from the ul
        taskList.removeChild(li);
        
        //Remove the remove btn from the ul
        li.removeChild(removeBtn);

        //Prints the ul after removing it
        console.log("(AFTER REMOVING) taskList", taskList)
    })

    //Prints the ul
    console.log("taskList", taskList)
}

