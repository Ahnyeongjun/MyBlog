import { ViewsRepository } from '../../db/repository/views';

export class ViewsService {
    constructor(private readonly viewsRepository: ViewsRepository) {}

    public async createViews() {
        return await this.viewsRepository.createView();
    }
}
