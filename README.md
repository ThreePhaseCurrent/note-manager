# note-manager
A test task, that was completed in 3 days.

# How start it
For NoteClient application after cloning the repository, you need to run the command `npm install`. First run the WebAPI application. After that, you can run NoteClient app with the command `ng serve`. To run in Russian, run the command `ng serve -configuration=ru`.

# e2e tests
To run the tests, you need to run the command `ng e2e`.

# troubleshooting
The server (API) must start from port 5001. If this is not the case, then you need to correct the port number to yours in the file `NoteClient/src/app/components/shared/baseURL.ts` and rebuild the client application.
