# Part 4 

http://opensourcedotnetter.blogspot.com/2016/07/building-web-application-using-aspnet.html

https://www.youtube.com/watch?v=mfbVRKuGhxw

https://github.com/rajajhansi/aspnetcore-aurelia-tutorial

## Get aurelia source code
    https://github.com/aurelia/skeleton-navigation
    git clone https://github.com/aurelia/skeleton-navigation.git

    copy the content under skeleton-typescript-webpack to part4/modern

## Create tempalte 
    template>div>h1+input[type=test]

## Enabling Cross-Origin Requests
    Since Asp.Net Core’s Kestrel web server uses port 5000 to serve the APIs and our client webpack-dev-server is running on port 9000, we can’t invoke calls to the API unless we enable Cross Origin Resource Sharing. Using CORS, a server can explicitly allow some cross-origin requests. We should enable cross-origin requests coming from http://localhost:9000 in our APIs. 
    
    Add reference in .csproj : 
        <PackageReference Include="Microsoft.AspNetCore.Cors" Version="1.1.0" />
    Modify Startup.cs
        services.AddCors();
    