from backendFlask import createApp
import os

app = createApp()

if __name__ == "__main__":
    app.run(host="localhost", debug = True, port=os.environ.get('PORT', 5000)) # Simply refresh the opened webpage,
                            # quit running via Ctrl + C, else Ctrl + Break