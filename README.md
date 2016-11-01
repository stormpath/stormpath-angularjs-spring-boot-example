# AngularJS + Spring Boot + Stormpath Example

This project is an example application for a typical [AngularJS](http://angularjs.org/) webapp with a [Spring Boot](https://projects.spring.io/spring-boot/) backend.

You can read about how this application was created on [the Stormpath blog](https://stormpath.com/blog/angularjs-spring-boot-tutorial). Feel free to copy any code in this project for your own use in accordance with the [MIT license](LICENSE).

Through this project's commit logs, it shows you how to:

1. Create an AngularJS UI: [search](https://github.com/stormpath/angularjs-spring-boot-stormpath-example/commit/652ee29d9a002f5d437d356481809fe74114fe7e) and [edit](https://github.com/stormpath/angularjs-spring-boot-stormpath-example/commit/9a06e9071d5db9710c3a8555c0dfe81c752f2242) features
2. Create a Spring Boot app with Stormpath: [app from start.stormpath.io](https://github.com/stormpath/angularjs-spring-boot-stormpath-example/commit/740ed84ccb16c94bfb6451c453c325b7f86fa870)
3. Develop an API to CRUD people with Spring Data REST: [/api/people](https://github.com/stormpath/angularjs-spring-boot-stormpath-example/commit/f223f26dba108e864cec271b32b856423bc12d74)
5. Integrate AngularJS and Spring Boot apps: [cross-domain](https://github.com/stormpath/angularjs-spring-boot-stormpath-example/commit/88f43da9fc14bb59e6d1b7f36f658730029b4bd7)
6. Integrate Stormpath into AngularJS for login, registration and forgot password: [Stormpath Angular SDK](https://github.com/stormpath/angularjs-spring-boot-stormpath-example/commit/2eee2b677237f793bf4ff25b6705d9c72efc984d)

**Prerequisites**: Java 8, Node.js, Maven, Gulp.js, a [Stormpath Account](https://api.stormpath.com/register), and an `apiKey.properties` file in `~/stormpath/`.

To run the Spring Boot backend, execute `mvn spring-boot:run`.

To run the AngularJS frontend, execute `npm install && gulp`. 

See [@mraible/angular-seed](https://github.com/mraible/angular-seed/blob/master/README.md) to learn more about the the commands you can run in this project. 
