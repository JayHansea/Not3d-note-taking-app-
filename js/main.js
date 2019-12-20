let data = [];


let display = document.querySelector('.display');
let head = document.querySelector('#title');
let color = document.querySelector('#color');
let body = document.querySelector('#message');
let post = document.querySelector('#post');
let clear = document.querySelector('#clear');
let yes = document.querySelector("#yes");


clear.addEventListener('click', (e) => {
	e.preventDefault();
    head.value = "";
    body.value = "";
}) 

post.addEventListener('click', (e) => {
	e.preventDefault();
	let headValue = head.value;
    let bodyValue = body.value;

    data.push({"title":headValue, "body":bodyValue});
   
    
   
	let div = document.createElement('div');
	let edit = document.createElement('button');
	let dlt = document.createElement('button');

	edit.innerHTML = "Edit";
    edit.style.background = "#0da00d";
    edit.style.border = "2px solid #0da00d";
    edit.style.color = "#fff";
    edit.style.borderRadius = "10px 0 0 10px";
    edit.style.padding = ".375rem .75rem";
    edit.style.marginRight = "4px";

    dlt.innerHTML = "Delete";
    dlt.style.background = "#dc3545";
    dlt.style.border = "2px solid #dc3545";
    dlt.style.color = "#fff";
    dlt.style.borderRadius = "0 10px 10px 0";
    dlt.style.padding = ".375rem .75rem";
    edit.style.marginLeft = "4px";

	div.style.border = "2px solid" + color.value;
	div.style.padding = "2%";
	div.style.marginTop = "5vh";

	div.innerHTML += "<h3>" + headValue + "</h3>" + "<p>" + bodyValue + "</p>";

	div.style.textAlign = "justify";
    div.style.borderRadius = "10px";
    div.style.background = "#fff";
    div.style.color = "#000";
    div.appendChild(edit);
    div.appendChild(dlt);
    display.appendChild(div);

    dlt.addEventListener("click", () => {
	    dlt.setAttribute("data-target", "#exampleModalCenter");
	    dlt.setAttribute("data-toggle", "modal");

	    yes.addEventListener('click', () => {
			div.style.display = "none";
		})					
	});


	edit.addEventListener('click', () => {
		for (let i = 0; i < data.length; i++) {
	    	head.value = data[i].title;
	    	body.value = data[i].body;
	    }

	});
    
});