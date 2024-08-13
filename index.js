//https://www.freecodecamp.org/learn/2022/responsive-web-design/

//Learn with https://javascript.info/
//Quite fun haha https://learnjavascript.online/app.html

//Shortcut Commands to open console log in opera ctrl + shift + j

//Difference between Arrays and Nodelist in JS
//https://www.freecodecamp.org/news/dom-manipulation-htmlcollection-vs-nodelist/


//Create a new list item when clicking on the Add btn
function addTask() {

    //Create a html element (<><>) node with the name li => <li><li>
    var li = document.createElement("li");

    li.setAttribute("id", Math.random().toString(16).slice(2)); //set a unique id for every list item

    //Gives the current value of input
    var inputValue = document.getElementById("userInput").value;

    //Create a textnode (viewable html text) which contains an element node - inputValue in this case
    var t = document.createTextNode(inputValue);
    t.className = "active";


    var taskList = document.getElementById("taskList") //refers to ul

    var removeBtn = document.createElement("button"); //create a remove btn
    removeBtn.innerHTML = "X" //make X the label of the button
    removeBtn.id = "removeBtn"; //add an id to the created btn

    var checkLbl = document.createElement("i") //create a check btn
    checkLbl.className = "fa fa-check"; //add a class name to access the icon
    checkLbl.id = "checkLbl" // add an id to the check lbl(icon)


    if (inputValue === '') {
        //Throw error
        alert("Please type something!")
    }
    else {
        //Insert the element - t in the list item => <li>t<li>
        li.appendChild(checkLbl);
        li.appendChild(t); //console.log(li)

        //Insert the list item into the unordered list (ul)
        taskList.append(li);

        //Inset a remove btn into the ul
        li.appendChild(removeBtn);
    }

    //Clearing the user input after adding it to the list
    document.getElementById("userInput").value = "";

    //Detect if the removeBtn has been clicked
    removeBtn.addEventListener("click", function () {
        //Remove the list item from the ul
        taskList.removeChild(li);

        //Remove the remove btn from the ul
        li.removeChild(removeBtn);

        //Prints the ul after removing it
        console.log("(AFTER REMOVING) taskList", taskList)
    })

    //Prints the ul
    console.log("taskList", taskList)

    //if user select text -> strike text and change list item colour
    taskList.addEventListener("mousedown", function (e) {

        //e.preventDefault();
        var ul = document.getElementById("taskList");
        var items = ul.getElementsByTagName("li");


        for (var i = 0; i < items.length; ++i) {
            if (e.target.id === items[i].id) {

                //If I'm not mistaken, the cross and uncross part doesn't work after adding a few tasks

                //John figured this part out
                //Checks whether the style of the list item has been changed 

                if (items[i].style.textDecoration === "line-through") { //if list item style changed it means that the list item was clicked
                    items[i].style.textDecoration = ""; //these 2 lines uncrosses the list item when it is clicked
                    items[i].style.backgroundColor = "";
                }
                else { //if list item style has not changed means that it has not been crossed yet
                    items[i].style.setProperty("text-decoration", "line-through");
                    items[i].style.setProperty("background-color", "rgb(235, 158, 64)");
                }
            }

        }

    })

}

