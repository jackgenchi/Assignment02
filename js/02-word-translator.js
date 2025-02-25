function wordTranslator() {
    alert("This program will translate \"Hello World\" into 1 of 4 different languages based on user input.");
    let langCode = prompt("Please input the desired languaged code (\"es\", \"de\", \"en\", \"fr\") ");
    let hwTranslation;
    let langLong;
    switch (langCode) {
        case 'es' :
            {
                hwTranslation = "Hola Mundo";
                langLong = "Spanish";
                break;
            }
        case 'de' :
            {
                hwTranslation = "Hallo Welt";
                langLong = "German";
                break;
            }
        case 'fr' :
            {
                hwTranslation = "Salut tout le monde";
                langLong = "French";
                break;
            }
        default: 
            {
                hwTranslation = "Hello World";
                langLong = "English";
                break;
            }
            //alert("Input is not a supported/recognized language code. \n Please run again with one of the following choices:\n \"es\", \"de\", \"en\", \"fr\" ")
    } 
    alert("Hello world in "+ langLong +" is: "+ hwTranslation);
    document.write("Thank you for using the application");
}

wordTranslator();

