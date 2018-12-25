#Prepare dotnet:sdk image
FROM microsoft/dotnet:2.1-sdk AS dotnet-builder
# Setup NodeJs
RUN apt-get update && \
    apt-get install -y wget && \
    apt-get install -y gnupg2 && \
    wget -qO- https://deb.nodesource.com/setup_6.x | bash - && \
    apt-get install -y build-essential nodejs
# End setup
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY ArmadaGrandee.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN npm install 
RUN npm rebuild node-sass
RUN dotnet publish -c Release -o out


# Build docker image of Project
FROM microsoft/dotnet:2.1-aspnetcore-runtime
WORKDIR /app
COPY --from=dotnet-builder /app/out /app
EXPOSE 5000/tcp
ENV ASPNETCORE_URLS="http://*:5000"
ENTRYPOINT ["dotnet", "ArmadaGrandee.dll"]