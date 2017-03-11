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
    Add reference in .csproj : 
        <PackageReference Include="Microsoft.AspNetCore.Cors" Version="1.1.0" />
    Modify Startup.cs
        services.AddCors();
    