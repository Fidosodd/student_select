window.onload = function() {
document.getElementById("mybutton").onclick = randomSelector;
}

function randomSelector() {
	
	{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "test.txt", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                /*document.write(allText);*/
				var splitString = allText.split(" ");
				Length = splitString.length;
				/*var test = allText.slice(2, 8);*/
				/*document.write(splitString);*/
				
				var classSize = Length
				var randomChoice = Math.floor(Math.random() * classSize); 
				/*document.write(randomChoice)*/
				document.write(splitString[randomChoice])
				
            }
        }
    }
    rawFile.send(null);
}
  }
