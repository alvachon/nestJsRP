import {Controller, Get} from '@nestjs/common'

@Controller()
export class AppController {
/*  Define the routes and the methods that handle
*   the request for the asked route (routes controller) */

/*  If user visit http://localhost:3000/home,
*   this method should handle that request */
//  @Get('/home')
    @Get('/')
    home()
    {
        return 'Hello, World';
    }

}