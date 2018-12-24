# ArmadaGrandee
Sample project based on <a href="https://fullstackmark.com/post/13/jwt-authentication-with-aspnet-core-2-web-api-angular-5-net-core-identity-and-facebook-login">the blog post</a> demonstrating jwt-based authentication with an Angular (v5.2.1) frontend and ASP.NET Core 2 WebApi. Includes both local user registration with .NET Core Identity membership and facebook login scenarios.


## Development Environment
- Sql Server Express 2017 & Sql Server Management Studio 2017
- Runs in both Visual Studio 2017 & Visual Studio Code
- Node 8.9.4 & NPM 5.6.0
- .NET Core 2.0 sdk
- Angular CLI -> `npm install -g @angular/cli` https://github.com/angular/angular-cli
 

## Setup
To build and run the project using the command line:
1. Install npm packages with `src>npm install` in the `src` directory.
2. Restore nuget packages with `src>dotnet restore` in the `src` directory.
3. Create the database with `src>dotnet ef database update` in the `src` directory.
4. Run the project with `src>dotnet run` in the `src` directory.
5. Point your browser to **http://localhost:5000**.

Of course, you can also run it from either Visual Studio 2017 or Visual Studio Code with the IDE handling most of the steps above.  If you have issues, try running the above steps from the command line to ensure things are setup properly.

## On Mac Installation MSSql

docker pull microsoft/mssql-server-linux

docker run -d --name sql_server_demo -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=reallyStrongPwd123' -p 1433:1433 microsoft/mssql-server-linux
 npm install -g sql-cli
  mssql -u sa -p reallyStrongPwd123
