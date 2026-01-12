//your JS code here. If required.
const codes=document.querySelectorAll(".code")

codes.forEach((code)=>{
	code.addEventListener('keyup',(e)=>{
		if(e.key==="Backspace"){
			const previoussibiling=code.previousElementSibiling;
			if(previoussibiling){
				previoussibiling.focus()
			}
			return;
		}
		const nextsibling=code.nextElementSibiling;
		if(nextsibling){
			nextsibling.focus();
		}
	})
})