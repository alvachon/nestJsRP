import { Module }           from '@nestjs/common'
import { AppController }    from '@nestjs/common'

@Module({
    controllers: [AppController],
})
export class AppModule {

}