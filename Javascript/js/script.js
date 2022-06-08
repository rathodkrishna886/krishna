    //function $(id)
    //{
    // return document.getElementById(id);
    //}
    //let $ = id => document.getElementById(id);
    let $ = name => document.getElementById(name);
    //let int = (number) => parseInt(number);
    var number = document.getElementById("number").value;
    let getLength = (number) => String(number).length
    let int = (number) => parseInt(number);
    let float = (number) => parseFloat(number);
    let log = (message) => console.log(message)
    let error = (error_message) => console.error(error_message)