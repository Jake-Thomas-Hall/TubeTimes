# TubeTimes - A TfL API querying web application

Live instance: https://ws326200-atwd2.remote.ac/

## Built with

- Angular 15 (with routing) for the frontend
- Bootstrap 5 for frontend styling
- ASP.NET Core 6 (.NET 6) Web API backend
- Calls the [TfL API](https://api-portal.tfl.gov.uk/) for london tube information
- VS Code for frontend
- Visual Studio 2022 for backend

## Development

### Front end

1. You will need to install node 16 or 18, then open the `Frontend/tube-times` directory.
2. Run `npm install` to install all dependencies.
3. Then run `ng serve` to build and launch the project.
4. Frontend should load on localhost:4200.
5. If you need to set breakpoints/debut, run `npm start` instead, this starts the application on 127.0.0.1:4200 instead, allowing the debugger to find the site.

### Backend

1. Make sure the ASP.NET workload is installed in Visual Studio.
2. Open the solution in `Backend/`.
3. Run the project to restore nuget packaes and build.
4. Application should load and launch on localhost:7133.
5. Default page is the swagger documentation.

# Screenshots
![image](https://user-images.githubusercontent.com/25041735/204928713-feae9c10-3d8d-462c-8c19-0226d1dfd02b.png)

![image](https://user-images.githubusercontent.com/25041735/204928988-ffd19379-5562-46a5-aedb-e1f182bffdb5.png)

![image](https://user-images.githubusercontent.com/25041735/204929007-f5b36a15-cec6-4c15-8b6c-8528ccc5311e.png)

![image](https://user-images.githubusercontent.com/25041735/204929037-99dcb12e-23c8-4d6b-8c38-4fa9c91993a9.png)

![image](https://user-images.githubusercontent.com/25041735/204929102-b9fb8363-a4dd-4c59-819f-a806e857f152.png)

![image](https://user-images.githubusercontent.com/25041735/204929154-deee909d-cce9-424c-8167-6f8cd0c52455.png)

![image](https://user-images.githubusercontent.com/25041735/204929470-d7a9be71-26bd-4b8b-ae21-2937ad7f6c4d.png)
