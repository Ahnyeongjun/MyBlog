import { relative } from 'path/posix';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import connection from '..';
import { Post, Series } from '../entity';

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
        const series = await seriesRepository.find({ relations: ['post'] });
        return series;
    }

    public async createBySeries(seriesName: string) {
        const seriesRepository = (await connection).manager.getRepository(Series);
        const series = new Series();
        series.name = seriesName;

        return await seriesRepository.save(series);
    }
    public async updateBySeries(series: Series, post: Post[]) {
        const seriesRepository = (await connection).manager.getRepository(Series);
        const newSeries = new Series();
        newSeries.post = post;
        return await seriesRepository.save({
            ...series,
            ...newSeries,
        });
    }
}
