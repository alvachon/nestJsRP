# nestJsRP
Simulating a NestJS structure from scratch

# Steps so far
1. Creating a directory named **myapp**, cd in.
2. ``npm init -y``  --> Create a package.json, that represent an empty nodejs project.
3. Installing the core and supporting files (with npm or yarn) with the command ``npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata`` as cited in https://docs.nestjs.com/ A node_modules directory appear and package-lock.json
4. npm send me a notice to run ``npm install -g npm@10.2.0`` for update !
5. Need to install 3 more packages to handle http request and typescript : ``npm i @nestjs/platform-express typescript``
6. We can see in the package.json an update of the new packages that were installed :
```
dependencies:
{
    "@nestjs/common": "^10.2.7",
    "@nestjs/core": "^10.2.7",
    "@nestjs/platform-express": "^10.2.7",
    "reflect-metadata": "^0.1.13",
    "rxjs": "^7.8.1",
    "typescript": "^5.2.2"
  }
```
7. Creating a config file for typescript in the root of the project. `` tsconfig.json``
8. He pasted inside a basic configuration that go as follow:
```
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es2017",
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    }
}
```
at 4.35 in https://www.youtube.com/watch?v=yNj_tzbX6BQ

Edit : I created a .gitignore and added node_modules