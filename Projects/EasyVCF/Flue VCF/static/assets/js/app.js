/*
* Global variables and constants
*/
const button_go = document.getElementById("btn-go");
const button_download = document.getElementById("btn-download");
var fullname = firstname+"_"+lastname;
var filename = fullname + ".vcf";
var file;

/*
* Make file downloadable
*/
function download(filename, file){
    button_download.setAttribute('href', 'data:text/vcard;charset=utf-8,'+encodeURIComponent(file));
    button_download.setAttribute('download', filename);
/*
    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element); */
}

/*
* Event listeners
*/
button_go.addEventListener("click", create);
button_download.addEventListener("click", download(filename, file));

function create(context){
    /*
    * I don't know much about vCard versions, so I'll just use the latest
    */
    var version = " 4.0";

    var title = document.getElementById("title");
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var middlename = document.getElementById("middlename");
    var nickname = document.getElementById("nickname");
    var sex = document.getElementById("sex");
    var email1 = document.getElementById("email1");
    var email2 = document.getElementById("email2");
    var telephone1 = document.getElementById("telephone1");
    var telephone2 = document.getElementById("telephone2");
    var school = document.getElementById("school");
    var school_class = document.getElementById("school_class");
    var organisation = document.getElementById("organisation");
    var department = document.getElementById("department");
    var dob = document.getElementById("dob");
    var next_of_kin = document.getElementById("next_of_kin");

    var startText = "BEGIN:VCARD\nVERSION:4.0";

    var bodyText = [
        ["N:", lastname.value+";"+firstname.value+","+middlename.value+";;"+title.value+";"],
        ["FN:", title.value+" "+firstname.value+" "+middlename.value+" "+lastname.value],
        ["ORG:", organisation.value],
        ["TITLE:", title.value],
        ["TEL;", "TYPE=home,voice;VALUE=uri:tel:"+telephone1.value],
        ["TEL;", "TYPE=home,voice;VALUE=uri:tel:"+telephone2.value],
        ["ADR; TYPE=HOME;LABEL="+address.value+":;;"+address.value],
        ["EMAIL:", email1.value],
        ["EMAIL:", email2.value]
    ];

    var endText = "END:VCARD";

    var file = startText;
    for (var i = 0; i < bodyText.length; i++){
        for (var j = 0; j < bodyText[i].length; j++){
            file += bodyText[i][j];
        }
        file += "\n";
    }
    file += endText; 
    console.log(file);
};