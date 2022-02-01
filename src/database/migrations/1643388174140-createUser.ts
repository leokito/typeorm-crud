import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUser1643388174140 implements MigrationInterface {
    name = 'createUser1643388174140'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: "id",
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: "createdOn", type: "timestamp", default: 'now()',
                    },
                    {
                        name: "updatedOn", type: "timestamp", default: 'now()',
                    },
                    {
                        name: 'name', type: 'varchar',
                    },
                    {
                        name: 'email', type: 'varchar', isUnique: true,
                    },
                    {
                        name: 'password', type: 'varchar',
                    },
                    {
                        name: 'isAdmin', type: 'boolean', 
                    }
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
