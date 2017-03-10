# Part 2  Setup client tools TypeScipt and Typings tool
https://www.youtube.com/watch?v=nWmUQ1nFUs8
http://opensourcedotnetter.blogspot.com/2016/07/building-web-application-using-aspnet_3.html

## Install typescript and typing tolls locally
    npm init
    npm install --save-dev typescript
    npm install --save-dev typing

## Organize the project source code
    All client side code should be saved under /wwwroot folder
    The typescript code does not run at client side directly, so we put it in /src folder

## Create typescript project to manage the typescript code
    create /tsconfig.json
    run $tsc -watch
    tsc will transfer /src/app/*.ts to /wwwroot/app/*.js

## Support static file
    Add reference in .csproj
    <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.StaticFiles" Version="1.1.0" />
    </ItemGroup>
    
    Change Startup.cs
    app.UseStaticFiles();