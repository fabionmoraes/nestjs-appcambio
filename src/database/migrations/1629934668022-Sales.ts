import { MigrationInterface, QueryRunner } from 'typeorm';

export class Sales1629934668022 implements MigrationInterface {
  name = 'Sales1629934668022';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`appexchange\`.\`sales\` (\`id\` char(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`icon\` varchar(255) NULL, \`tax_coin\` float NOT NULL, \`buy_coin\` float NOT NULL, \`sale\` float NOT NULL, \`type_sale\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`coinId\` int NULL, \`storeId\` char(36) NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`stores\` ADD \`deleted_at\` datetime(6) NULL`,
    );

    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`sales\` ADD CONSTRAINT \`FK_a485e49b9ef366aaf84a2bd8605\` FOREIGN KEY (\`coinId\`) REFERENCES \`appexchange\`.\`coins\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`sales\` ADD CONSTRAINT \`FK_ef0e802924109a86947d4df5c9e\` FOREIGN KEY (\`storeId\`) REFERENCES \`appexchange\`.\`stores\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`sales\` ADD CONSTRAINT \`FK_52ff6cd9431cc7687c76f935938\` FOREIGN KEY (\`userId\`) REFERENCES \`appexchange\`.\`users\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`sales\` DROP FOREIGN KEY \`FK_52ff6cd9431cc7687c76f935938\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`sales\` DROP FOREIGN KEY \`FK_ef0e802924109a86947d4df5c9e\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`sales\` DROP FOREIGN KEY \`FK_a485e49b9ef366aaf84a2bd8605\``,
    );

    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`stores\` DROP COLUMN \`deleted_at\``,
    );
    await queryRunner.query(`DROP TABLE \`appexchange\`.\`sales\``);
  }
}
