import { MigrationInterface, QueryRunner } from 'typeorm';

export class StoresMigration1629576109547 implements MigrationInterface {
  name = 'StoresMigration1629576109547';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`appexchange\`.\`stores\` (\`id\` char(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`cnpj\` varchar(255) NOT NULL, \`company\` varchar(255) NOT NULL, \`company_name\` varchar(255) NULL, \`zip_code\` varchar(255) NULL, \`address\` varchar(255) NOT NULL, \`state\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, \`phone\` varchar(255) NULL, \`email\` varchar(255) NULL, \`active\` tinyint NOT NULL DEFAULT 1, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` int NULL, UNIQUE INDEX \`IDX_1b0c68bf8b79c9bf8076e378dd\` (\`cnpj\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`stores\` ADD CONSTRAINT \`FK_f36d697e265ed99b80cae6984c9\` FOREIGN KEY (\`userId\`) REFERENCES \`appexchange\`.\`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`stores\` DROP FOREIGN KEY \`FK_f36d697e265ed99b80cae6984c9\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_1b0c68bf8b79c9bf8076e378dd\` ON \`appexchange\`.\`stores\``,
    );
    await queryRunner.query(`DROP TABLE \`appexchange\`.\`stores\``);
  }
}
