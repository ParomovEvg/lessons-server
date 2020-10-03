import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Cat } from './entityes/cat.entity';
import { CatsService } from './cats.service';

@Crud({
  model: {
    type: Cat,
  },
})
@Controller('cats')
export class CatsController implements CrudController<Cat> {
  constructor(public service: CatsService) {}
}
