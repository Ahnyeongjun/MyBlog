import { EntityRepository, getRepository, Repository } from 'typeorm';
import connection from '..';
import { Series } from '../entity';

@EntityRepository(Series)
export class SeriesRepository {
    public async findoneBySeriesName(seriesName: string) {
        const seriesRepository = (await connection).manager.getRepository(Series);
        const series = await seriesRepository.findOne({
            relations: ['post'],
            where: { name: seriesName },
        });
        return series;
    }
    public async findSeriesAllBySeries() {
        const seriesRepository = (await connection).manager.getRepository(Series);
        const series = await seriesRepository.find();
        return series;
    }

    public async createBySeries(seriesName: string) {
        const seriesRepository = (await connection).manager.getRepository(Series);
        const series = new Series();
        series.name = seriesName;

        return await seriesRepository.save(series);
    }
}
