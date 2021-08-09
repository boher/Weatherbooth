# Weatherbooth
## Directory diagram
--- Weatherbooth
<br>
|- .github
<br>
|- _pycache_
<br>
|- website
<br>
|- .gitattributes
<br>
|- .gitignore
<br>
|- app.py
<br>
|- Procfile
<br>
|- README.md
<br>
|- requirements.txt

## Lets run the application on your local machine
### Assumptions: 
- Python3 is installed and added to path in environment variables
- VS code installation preferred.

### Steps to perform:
Step-1: Clone the repository (main branch)
<br>
Step-2: Navigate to the repository folder (Weatherbooth) on your machine (e.g., ".\Weatherbooth")
<br>
Step-3: Copy the directory that contains the requirements.txt 
<br>
Step-4: Open the command-line prompt 
<br>
Step-5: On the command-line prompt, navigate to the directory you have just copied by running the command `cd .\Weatherbooth`
<br>
Step-6: On the command-line prompt, run the command `pip install -r requirements.txt`
<br>
Step-7: Navigate to the subdirectory folder (./Weatherbooth/website) and find the file, config.py 
<br>
Step-8: In the file, config.py, comment line 5 and uncomment line 10. Save the file
<br>
Step-8: Finally, on the command-line prompt, run the command `python app.py` and follow the link provided (similar to http://localhost:5000/)

## References
Website micro framework: [Flask](https://flask.palletsprojects.com/en/2.0.x/ "Flask Documentation")
<br>
Website deployment platform (CI/CD): [Heroku](https://devcenter.heroku.com/categories/reference "Heroku Documentation")
