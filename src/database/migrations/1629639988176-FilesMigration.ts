import { MigrationInterface, QueryRunner } from 'typeorm';

export class FilesMigration1629639988176 implements MigrationInterface {
  name = 'FilesMigration1629639988176';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`appexchange\`.\`files\` (\`id\` int NOT NULL AUTO_INCREMENT, \`file\` varchar(255) NULL, \`name\` varchar(255) NULL, \`type\` varchar(255) NULL, \`subtype\` varchar(255) NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`files\` ADD CONSTRAINT \`FK_7e7425b17f9e707331e9a6c7335\` FOREIGN KEY (\`userId\`) REFERENCES \`appexchange\`.\`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`files\` DROP FOREIGN KEY \`FK_7e7425b17f9e707331e9a6c7335\``,
    );
    await queryRunner.query(`DROP TABLE \`appexchange\`.\`files\``);
  }
}
