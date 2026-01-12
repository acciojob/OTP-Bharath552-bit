//your JS code here. If required.
const codes=document.querySelectorAll(".code")

codes.forEach((code)=>{
	code.addEventListener('keyup',(e)=>{
		if(e.key==="Backspace"){
			const previoussibiling=code.previousElementSibling;
			if(previoussibiling){
				previoussibiling.focus()
			}
			return;
		}
		const nextsibling=code.nextElementSibling;
		if(nextsibling){
			nextsibling.focus();
		}
	})
})