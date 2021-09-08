import { EntityRepository, getConnection, getRepository, Repository } from 'typeorm';
import connection from '..';
import { updateTagRequest } from '../../interface';
import { Tag } from '../entity';

@EntityRepository(Tag)
export class TagRepository {
    public async createByTag(tagName: string) {
        const tag = new Tag();
        tag.name = tagName;
        tag.count = 1;
        const tagRepository = (await connection).manager.getRepository(Tag);
        return await tagRepository.save(tag);
    }

    public async updateByTag(updateTag: updateTagRequest) {
        const tagRepository = (await connection).manager.getRepository(Tag);
        const tag = await tagRepository.findOne({
            where: { name: updateTag.name },
        });
        return await tagRepository.save({
            ...tag,
            ...updateTag,
        });
    }

    public async deleteByTag(tagName: string) {
        await getConnection().createQueryBuilder().delete().from(Tag).where('name = :name', { name: tagName }).execute();
    }

    public async findOneByTagName(tagName: string) {
        try {
            const tagRepository = (await connection).manager.getRepository(Tag);

            const tag = await tagRepository.findOne({ name: tagName });

            return tag;
        } catch (e) {
            console.log(e);
        }
    }

    public async findAllByTag() {
        const tagRepository = (await connection).manager.getRepository(Tag);
        return await tagRepository.find({});
    }

    public async findAllByTagName(tagName: string) {
        const tagRepository = (await connection).manager.getRepository(Tag);
        return await tagRepository.findOne({
            where: { name: tagName },
        });
    }
}
