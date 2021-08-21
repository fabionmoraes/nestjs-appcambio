import { MigrationInterface, QueryRunner } from 'typeorm';

export class RoleUsersMigration1629574480071 implements MigrationInterface {
  name = 'RoleUsersMigration1629574480071';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`appexchange\`.\`roleUsers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`roleId\` int NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`roleUsers\` ADD CONSTRAINT \`FK_7085a67b1b8a4ce3b867f86decc\` FOREIGN KEY (\`roleId\`) REFERENCES \`appexchange\`.\`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`roleUsers\` ADD CONSTRAINT \`FK_a4ce71b4dd89a58f61e1bbc459e\` FOREIGN KEY (\`userId\`) REFERENCES \`appexchange\`.\`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`roleUsers\` DROP FOREIGN KEY \`FK_a4ce71b4dd89a58f61e1bbc459e\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`roleUsers\` DROP FOREIGN KEY \`FK_7085a67b1b8a4ce3b867f86decc\``,
    );
    await queryRunner.query(`DROP TABLE \`appexchange\`.\`roleUsers\``);
  }
}
