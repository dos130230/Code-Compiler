
function renderTable(arr,galich) {
	let Result_table = document.querySelector('#Result_table')
	let p = document.createElement('p')
	let br = document.createElement('br')
	p.textContent = galich+"  "+ arr[0]+" ===> "+arr[1]
	Result_table.append(p,br)
}



let task_select = document.querySelector("#task_select")
renderQusetion(baza[0])



function renderQusetion(one) {
	

	let div = document.createElement('div')
	let question = document.querySelector("#question")
	let w3review = document.querySelector("#w3review")

	question.innerHTML = null
	div.setAttribute("id", "list");
	w3review.value = ''
	w3review.value = one.func
	div.innerHTML = `
		<h3 class="name" style="margin-bottom: 20px;">${one.name}</h3>
		<br>
		<p class="texts">${one.question}</p>
		<br>
		<img src=${one.examples} alt="">
		<br>
		<br>
		<h3>Notes</h3>
		<br>

		<p class="notes">${one.notes}</p>

	`
	question.append(div)
}




task_select.onclick = (event)=>{
	let w3review = document.querySelector("#w3review")
	renderQusetion(baza[task_select.value])

	
}

function Check_Render(argument) {


	let check = document.querySelector("#check")
	check.onclick = ()=>{
	let one = baza[task_select.value]
	let w3review = document.querySelector("#w3review")
	let body = w3review.value
	let Result_table = document.querySelector('#Result_table')
	Result_table.innerHTML = null
	for(let i of one.test){
		let res = new Function(body+"return "+i[0])

		if (i[1]+""==res()+"") renderTable(i,"✅ Bravo!:   ")

		else renderTable(i,"💣 Boom!:   ")

			}


		}
}

Check_Render()
	











