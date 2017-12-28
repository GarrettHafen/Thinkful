//gets the input and calls other function and unhides results
const counter = () => {
	var rawInput = document.getElementById('user-text').value;	
	var punctuationless = rawInput.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()']/g,"");
	var userInput = punctuationless.replace(/\s{2,}/g," "); 
	var total = WordCount(userInput);
	var unique = Unique(userInput);
	var average = Average(userInput) + " Characters";
	document.getElementById('count').innerHTML = total;
	document.getElementById('unique').innerHTML = unique;
	document.getElementById('average').innerHTML = average;
	document.getElementById("results").classList.remove('hidden');
}

//when clicked call counter
document.getElementById('submit').onclick = counter;

//total number of words
function WordCount (str){
	var total = str.split(" ").length;
	return total;	
}
// total number of unique words
function Unique(str){
	var words = str.split(" ");
	var uniqueWords = new Set(words);
	return uniqueWords.size;

}
//average length of each word
function Average(str){
	var words = str.split(" "); //not DRY code
	var totalLetters = 0;
	var wordAverageLength
	//need for Each help
	for(var i=0; i<words.length; i++){
		totalLetters += words[i].length;
	}
	wordAverageLength = (totalLetters/words.length).toFixed(2);
	return wordAverageLength;
}
