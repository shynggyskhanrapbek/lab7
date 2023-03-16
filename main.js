function lab7() {
	const hl = document.getElementById ("hl");
    hl.remove();
	
	let h1 = document.createElement("h1");
	h1.innerHTML = "Lab7 Assignment";
	document.body.appendChild(h1);
	h1.style.color = "blue";
	
	let hr1 = document.createElement("hr")
	document.body.appendChild(hr1);
	
	let h21 = document.createElement("h2");
	h21.innerHTML = "Task";
	document.body.appendChild(h21);
	h21.style.color = "red";

	let p1 = document.createElement("p");
	p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
	document.body.appendChild(p1);

    const task = [
   "find elements in the DOM (5 points);",
   "create/add/remove elements (5 points);",
   "change content of the elements (5 points);"	,
   "change styles of the elements (5 points);",
   "change attributes of the elements (5 points);",
   "change classes of the elements (5 points)."
   ];
   const ul = document.createElement('ul');
   for (let i = 0; i < task.length; i++) {
   const li = document.createElement('li');
   li.innerHTML = task[i];
   if (i % 2 == 0) {
   	li.style.color = "green";
   } else {
   	li.style.color = "purple";
   }
   ul.appendChild(li);
   }
   document.body.appendChild(ul);
   
   let hr2 = document.createElement("hr")
   document.body.appendChild(hr2);
   
    let h22 = document.createElement("h2");
	h22.innerHTML = "Submission";
	document.body.appendChild(h22);
	h22.style.color = "red";
	
	let p2 = document.createElement("p");
	p2.innerHTML = "To submit your work, follow these instructions:";
	document.body.appendChild(p2);

	const submission = [
    "Create a new repository on Github, named lab7 (1 point).",
    "Clone this repository to your local machine and work inside it.",
    "Create a new HTML file, called index.html, which has only one <h1> tag with \"Hello, World!\" message (1 point).",
    "Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point).",
    "Link this main.js file to your index.html file (Note: place your script at the end of the body section).",
    "Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points).",
    "After you finish your work, submit it to the Github (2 points)."
    ];
    const ul1 = document.createElement('ul');
    for (let i = 0; i < submission.length; i++) {
    const li1 = document.createElement('li');
    li1.textContent = submission[i];
    if (i % 2 == 0) {
   	li1.style.color = "green";
    } else {
   	li1.style.color = "purple";
    }
    ul1.appendChild(li1);
    }
    document.body.appendChild(ul1);
    
    let hr3 = document.createElement("hr")
    document.body.appendChild(hr3);
}