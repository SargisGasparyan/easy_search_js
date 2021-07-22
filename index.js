let list=["one","two","three"]
let root=document.querySelector("#root")
let serachText=""
let input = document.querySelector("input")
input.addEventListener('keyup',(e)=>{
	serachText=e.target.value
	render()
})

function render() {
	root.innerHTML=""
	list.filter((name)=>{
		return name.indexOf(serachText) !== -1
	})
	.map((name)=>{
		let div=document.createElement('div')
		div.innerHTML=name
		return div
	}).forEach(el=>{root.appendChild(el)})
}

render()
