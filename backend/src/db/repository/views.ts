import { EntityRepository, getRepository, Repository } from 'typeorm';
import connection from '..';
import { Views } from '../entity';

@EntityRepository(Views)
export class ViewsRepository {
    public async createView() {
        try {
            const views = new Views();
            views.viewsCount = 0;
            await (await connection).manager.save(views);

            return views;
        } catch (e) {
            console.log(e);
        }
    }
}
