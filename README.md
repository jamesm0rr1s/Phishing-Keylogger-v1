# Phishing Keylogger

This is a demo for a live keylogger that could be used with phishing to capture credentials and bypass two-factor authentication.


## Main features include:
 - Live keylogger with live output viewable from the "data/securedata/liveData.php" page
 - Data is stored in "data/securedata/data.txt". You should lock down the data/securedata/ directory
 - The JavaScript keylogger ("log.js") creates POST requests to a Python script ("data/log.py")
 - The message "Incorrect Try Again" is displayed when the target tries to log in

## Example Screenshot of Output from "liveData.php":
![Alt text](data/securedata/ExampleOutput-LiveData.png?raw=true "ExampleOutput-LiveData")
