import { MigrationInterface, QueryRunner } from 'typeorm';

export class CustomersMigration1629637701072 implements MigrationInterface {
  name = 'CustomersMigration1629637701072';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`FK_f36d697e265ed99b80cae6984c9\` ON \`appexchange\`.\`stores\``,
    );
    await queryRunner.query(
      `CREATE TABLE \`appexchange\`.\`customers\` (\`id\` char(36) NOT NULL, \`fullName\` varchar(255) NOT NULL, \`email\` varchar(255) NULL, \`phone\` varchar(255) NULL, \`phone_whatsapp\` varchar(255) NULL, \`birth\` datetime NULL, \`zip_code\` varchar(255) NULL, \`address\` varchar(255) NULL, \`state\` varchar(255) NULL, \`city\` varchar(255) NULL, \`active\` tinyint NOT NULL DEFAULT 1, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userCreatedId\` int NULL, \`userUpdatedId\` int NULL, \`storeId\` char(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`stores\` CHANGE \`company_name\` \`company_name\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`stores\` CHANGE \`zip_code\` \`zip_code\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`stores\` CHANGE \`phone\` \`phone\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`stores\` CHANGE \`email\` \`email\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`stores\` CHANGE \`userId\` \`userId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`stores\` ADD CONSTRAINT \`FK_f36d697e265ed99b80cae6984c9\` FOREIGN KEY (\`userId\`) REFERENCES \`appexchange\`.\`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`customers\` ADD CONSTRAINT \`FK_c1a2c2901aaf111427bb8bf3b88\` FOREIGN KEY (\`userCreatedId\`) REFERENCES \`appexchange\`.\`users\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`customers\` ADD CONSTRAINT \`FK_17f95f60c93c6a221ee722c631f\` FOREIGN KEY (\`userUpdatedId\`) REFERENCES \`appexchange\`.\`users\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`customers\` ADD CONSTRAINT \`FK_b7837678f3d750698394a80f70a\` FOREIGN KEY (\`storeId\`) REFERENCES \`appexchange\`.\`stores\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`customers\` DROP FOREIGN KEY \`FK_b7837678f3d750698394a80f70a\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`customers\` DROP FOREIGN KEY \`FK_17f95f60c93c6a221ee722c631f\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`customers\` DROP FOREIGN KEY \`FK_c1a2c2901aaf111427bb8bf3b88\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`stores\` DROP FOREIGN KEY \`FK_f36d697e265ed99b80cae6984c9\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`stores\` CHANGE \`userId\` \`userId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`stores\` CHANGE \`email\` \`email\` varchar(255) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`stores\` CHANGE \`phone\` \`phone\` varchar(255) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`stores\` CHANGE \`zip_code\` \`zip_code\` varchar(255) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`stores\` CHANGE \`company_name\` \`company_name\` varchar(255) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(`DROP TABLE \`appexchange\`.\`customers\``);
    await queryRunner.query(
      `CREATE INDEX \`FK_f36d697e265ed99b80cae6984c9\` ON \`appexchange\`.\`stores\` (\`userId\`)`,
    );
  }
}
