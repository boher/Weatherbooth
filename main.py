from backendFlask import createApp

app = createApp()

if __name__ == "__main__":
    app.run(host="localhost", debug = True) # Simply refresh the opened webpage,
                            # quit running via Ctrl + C, else Ctrl + Break