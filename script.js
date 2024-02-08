function getRussianText(){
	
	var enteredText = document.getElementById('text').value;
	
	var arrFromEnteredText = enteredText.split('');
	
	var arr = [];

	for(var i = 0; i < arrFromEnteredText.length; i++){
		arr.push(cryptSymbols[russianLetters.indexOf(arrFromEnteredText[i])]);	
	}
	
	var newText = arr.join('');
	
	document.getElementById('text').value = newText;	
	
}

function decrypt(){	
	
	var strFromTextField = document.getElementById('text').value;	
	
	var arrOfSymbols = strFromTextField.split('');	
	
	var stringsGroupArr = [];
	
	var temporaryString = '';
	
	while(arrOfSymbols.length > 0){
		var temporaryString = '';
		
		temporaryString += arrOfSymbols[0];
		temporaryString += arrOfSymbols[1];
		temporaryString += arrOfSymbols[2];
		
		stringsGroupArr.push(temporaryString);
		
		arrOfSymbols.shift();
		arrOfSymbols.shift();
		arrOfSymbols.shift();
	}
	
	var arrForOutput = [];	
	
	for(var i = 0; i < stringsGroupArr.length; i++){
		arrForOutput.push(russianLetters[cryptSymbols.indexOf(stringsGroupArr[i])]);
	}
	
	var newText = arrForOutput.join('');
	
	document.getElementById('text').value = newText;	

}