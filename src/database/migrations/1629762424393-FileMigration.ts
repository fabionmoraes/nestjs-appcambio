import { MigrationInterface, QueryRunner } from 'typeorm';

export class FileMigration1629762424393 implements MigrationInterface {
  name = 'FileMigration1629762424393';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`appexchange\`.\`files\` (\`id\` int NOT NULL AUTO_INCREMENT, \`file\` varchar(255) NULL, \`name\` varchar(255) NULL, \`type\` varchar(255) NULL, \`subtype\` varchar(255) NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`users\` ADD \`fileId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`users\` ADD CONSTRAINT \`FK_5963070526d10e14038f83f1be7\` FOREIGN KEY (\`fileId\`) REFERENCES \`appexchange\`.\`files\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`users\` DROP FOREIGN KEY \`FK_5963070526d10e14038f83f1be7\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`users\` DROP COLUMN \`fileId\``,
    );
    await queryRunner.query(`DROP TABLE \`appexchange\`.\`files\``);
  }
}
