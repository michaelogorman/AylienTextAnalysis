var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: 'YOUR_APP_ID',
  application_key: 'YOUR_APP_KEY'
});



//******************************
//Language Detection
//******************************

textapi.language('What language is this sentence written in?', function(err, resp) {
  	console.log("\nLanguage Detection Results:\n");
  	if (err !== null) {
    console.log("Error: " + err) 
  } else {
    console.log("Language	:",resp.lang);
    console.log("Confidence	:",resp.confidence);
  }
});


//******************************
//Sentiment Analysis
//******************************

textapi.sentiment('John is a very good football player!', function(err, resp) {
  console.log("\nSentiment Analysis Results:\n");
  if (err !== null) {
    console.log("Error: " + err) 
  } else {
    console.log("Subjectivity	:",resp.subjectivity);
    console.log("Subjectivity Confidence	:",resp.subjectivity_confidence);
    console.log("Polarity	:",resp.polarity);
    console.log("Polarity Confidence	:",resp.polarity_confidence);
  }
});


//******************************
//Article Summarization
//******************************

textapi.summarize('http://www.bbc.com/news/science-environment-30097648', function(err, resp) {
  	console.log("\nArticle Summarization Results:\n");  
  	if (err !== null) {
    console.log("Error: " + err) 
  } else {
    for (var i=0; i < resp.sentences.length; i++){
    console.log("Sentence ", i,": ",resp.sentences[i]); 
    }
  }
});

//******************************
//Article Classification
//******************************

textapi.classify('http://www.bbc.com/news/science-environment-30097648', function(err, resp) {
    console.log("\nArticle Classification Results:\n");
  	if (err !== null) {
    console.log("Error: " + err) 
  } else {
    for (var i=0; i < resp.categories.length; i++){
        console.log("Label	:",resp.categories[i].label);
    	console.log("Code	:",resp.categories[i].code);
		console.log("Confidence	:",resp.categories[i].confidence);
    }

  }
});

//******************************
//Entity Extraction
//******************************

textapi.entities('http://www.bbc.com/news/science-environment-30097648', function(err, resp) {
    console.log("\nEntity Extraction Results:\n");
  	if (err !== null) {
    console.log("Error: " + err) 
  } else {
    console.log("Organisations	:",resp.entities.organization);
    console.log("Locations	:",resp.entities.location);
    console.log("Keywords	:",resp.entities.keyword);
    console.log("Dates	:",resp.entities.date);
    console.log("People	:",resp.entities.person);
  }
});

//******************************
//Concept Extraction
//******************************

textapi.concepts('http://www.bbc.com/news/science-environment-30097648', function(err, resp) {
    console.log("\nConcept Extraction Results:");
  	if (err !== null) {
    console.log("Error: " + err) 
  } else {   
    var concepts = Object.keys(resp.concepts);   
    concepts.forEach(function(c) {
      var info = resp.concepts[c];
      console.log("\nConcept DBPedia URI	:" + c );
      console.log("Surface Form	:" + info.surfaceForms[0].string);
      console.log("Relavance Score	:" + info.surfaceForms[0].score);
      console.log("Offset Index	:" + info.surfaceForms[0].offset);
    });
    

    }
});

//******************************
//Hashtag Suggestion
//******************************

textapi.hashtags('http://www.bbc.com/news/science-environment-30097648', function(err, resp) {
    console.log("\nHashtag Suggestion Results:\n");
  	if (err !== null) {
    console.log("Error: " + err) 
  } else {
    for (var i=0; i < resp.hashtags.length; i++){
    console.log("Hashtag ", i,": ",resp.hashtags[i]); 
    }
  }
});

//******************************
//Article Extraction
//******************************

textapi.extract('http://www.bbc.com/news/science-environment-30097648', function(err, resp) {
  	console.log("\nArticle Extraction Results:\n");  
  	if (err !== null) {
    console.log("Error: " + err) 
  } else {
    console.log("Article Title	:",resp.title);
    console.log("Article text	:",resp.article);  
  }
});


