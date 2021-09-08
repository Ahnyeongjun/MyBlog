import { EntityRepository, getRepository, Repository } from 'typeorm';
import { View } from 'typeorm/schema-builder/view/View';
import connection from '..';
import { UpdateViews } from '../../interface/request/views';
import { Views } from '../entity';

@EntityRepository(Views)
export class ViewsRepository {
    public async createByView() {
        try {
            const views = new Views();
            views.viewsCount = 0;
            await (await connection).manager.save(views);

            return views;
        } catch (e) {
            console.log(e);
        }
    }
    public async updateByViews(req: UpdateViews) {
        try {
            const viewsRepository = (await connection).manager.getRepository(Views);

            const views = await this.findOneByViewId(req.uid);
            if (views) {
                return viewsRepository.save({ lock: { mode: 'PESSIMISTIC_READ' }, ...views, ...req });
            }
        } catch (e) {
            console.log(e);
        }
    }
    public async updataByView(req: UpdateViews) {
        try {
            const viewsRepository = (await connection).manager.getRepository(Views);

            const views = await this.findOneByViewId(req.uid);
            if (views) {
                return viewsRepository.save({ lock: { mode: 'PESSIMISTIC_READ' }, ...views, ...req });
            }
        } catch (e) {
            console.log(e);
        }
    }

    public async findOneByViewId(uid: string) {
        try {
            const viewsRepository = (await connection).manager.getRepository(Views);

            const views = await viewsRepository.findOne({ uid: uid });

            return views;
        } catch (e) {
            console.log(e);
        }
    }
}
