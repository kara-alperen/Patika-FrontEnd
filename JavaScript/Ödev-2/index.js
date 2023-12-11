let todoForm = document.getElementById("todo");
let todoList = document.getElementById("todoList");
let todos = window.localStorage.setItem("todos", JSON.stringify([]));
function createTodo(e) {
	e.preventDefault();
	// todo inputu boş değilse ya da sadece whitespace ise
	if (todoForm.elements[0].value.trim()) {
		let todoLi = document.createElement("li");
		let todoText = document.createTextNode(todoForm.elements[0].value);
		todoLi.addEventListener("click", function () {
			todoLi.classList.toggle("done");
		});
		let deleteBtn = document.createElement("button");
		deleteBtn.innerText = "X";
		deleteBtn.addEventListener("click", function () {
			todoList.removeChild(todoLi);
		});
		deleteBtn.classList.add("float-end", "btn", "btn-small", "py-1", "me-3");
		deleteBtn.style.color = "#e86a33";
		todoLi.appendChild(todoText);
		todoLi.appendChild(deleteBtn);
		todoList.appendChild(todoLi);
		createToastHeader("Listeye eklendi");
		// todo ekledikten sonra inputu boşalt
		todoForm.elements[0].value = "";
	} else {
		createToastHeader("Boş todo ekleyemezsiniz");
	}
}

function createToastHeader(text) {
	let toast = document.querySelector(".todoToast");
	let addedToastBody = document.querySelector("#addedToastBody");
	let addedDiv = document.createElement("div");
	let addedDivText = document.createTextNode(text);
	let addedCloseBtn = document.createElement("button");

	addedCloseBtn.classList.add("btn", "ms-auto");
	addedCloseBtn.innerText = "X";
	addedDiv.classList.add("toast-header");
	toast.classList.add("show");

	addedDiv.appendChild(addedDivText);
	addedDiv.appendChild(addedCloseBtn);

	addedCloseBtn.addEventListener("click", function () {
		addedToastBody.removeChild(addedDiv);
		// toast body nin içi boş olduğu zaman toast ı kapat
		if (addedToastBody.children.length == 0) {
			toast.classList.remove("show");
		}
	});
	addedToastBody.appendChild(addedDiv);
}
function closeToast() {
	// toast ı kapattığın zaman toast body nin içini boşalt
	let toast = document.querySelector(".todoToast");
	let addedToastBody = document.querySelector("#addedToastBody");
	toast.classList.remove("show");
	addedToastBody.innerHTML = "";
}
todoForm.addEventListener("submit", createTodo);