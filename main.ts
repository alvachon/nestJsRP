import { NestFactory }  from '@nestjs/core';
import { AppModule }    from './app.module';


async function bootstrap()
{
/*  This is used to create an instance of the nestjs application.
*   It expect to pass a module (like the roots module) */
    const app = await NestFactory.create(AppModule);

/*  Tell the app to start listening the server*/
    app.listen(3000);
}

bootstrap();