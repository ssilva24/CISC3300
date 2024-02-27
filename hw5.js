//1. Create a variable via a ternary operator that assigns a string based on an expression.
    let expression;
    let ternaryVar = expression ? "true" : "false";

//2. Create an object and loop through its properties, console logging each properties’ value
    const dog = {age: "12", breed: "Cocker Spaniel", color: "brown", size: "medium"};

    for(const property in dog)
    {
        console.log(dog[property])
    }

//3. Create an array of numbers. Using the map function, create a second array of those numbers squared.
    const numArray = [69, 23, 9, 2, 89];

    const numSquared = numArray.map(function(num) {
        return num * num;
    })

    console.log(numSquared);


/*
4. What is the DOM? What is meant by the DOM tree?
    The Document Object Model (DOM) specifies how browsers should create a model of an HTML page and how JavaScript can access and update the contents of a web page while it is in the browser window.
    The browser’s live rendering/representation of the html page.
    As a browser loads a web page, it creates a model of that page. The model is called a DOM tree, and it is stored in the browsers' memory. It consists of four main types of nodes.
        document node
        element nodes
        attribute nodes
        text nodes
    to use: Locate the node that represents the element you want to work with.

*/

/*
5. What is a XSS attack? How do they work? How can you guard against them?
    If you add HTML to a page using innerHTML (or several jQuery methods), you need to be aware of Cross-Site Scripting Attacks or XSS; otherwise, an attacker could gain access to your users' accounts.
    if a malicious user adds code to an input that is eventually generated as html, that code could potentially be run for different users, think reddit comments for example
    if a <script>send this users data elsewhere</script> was included for example
    How to guard against:
        be very careful with what content you treat as html
        it should very rarely have the option to have come from a user at all
        if it must there are options to validate that input, strip it of potential malicious intent by removing tags, escaping characters, etc

*/

//6. Do the following:
    //a. add a button with an id, when that button is clicked, change the button’s text
        //IN HTML:
        <button id="button"> Click Here!</button>

        //IN JAVASCRIPT
        const Button = document.getElementById("button");
        Button.addEventListener('click', function() {
            Button.textContent = "button's text has been changed";
        })

    //b. add a list with several list items, if any list item is clicked, change all list items
    //color to blue              
        <ul id ="list" onclick = "turnToBlue()">
            <li> item1</li>
            <li> item2</li>
            <li> item3</li>
        </ul>

        function turnToBlue()
        {
            var items = document.getElementById("list").getElementsByTagName("li");
            for(let x =0; x<items.length; x++)
            {
                items[i].style.color= "blue";
            }
        }

    //c. add a div that contains a second button element. When that button element is
    //clicked, append a paragraph element with some text to the containing div after
    //the second button.
        <div id="container">
        <button id="button1">button1</button>
        <button id ="button2">button2</button></div>

        var container = document.getElementById("container");
        
        var button2 = document.getElementById("button2");
        button2.addEventListener('click', function(){
            let p = document.createElement("p");
            p.textContent = "paragraph element with text added after the second button element is clicked";
            container.appendChild(p);
        })
