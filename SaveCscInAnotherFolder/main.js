function DownloadCSV() {
       
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("firstName").value;
    const phone = document.getElementById("phone").value;
    
    console.log(firstName);
    console.log(lastName);
    console.log(phone);

    // Create the log file with Today's Date
    folderName = "~/Desktop/"

    var now = new Date();
    var logfile_name = now.getFullYear() + "-" + 0 + (now.getMonth() + 1) + "-" + 0 +now.getDate();

    var fileOut = new File([""], folderName + logfile_name+"/"+'RT3.csv');
    if (!fileOut.exists) {
    fileOut.open("w");
    fileOut.writeln(",", docRef.name);
    } else {
    fileOut.open("a");
    fileOut.writeln(",", docRef.name);
    }

    fileOut.close();
}