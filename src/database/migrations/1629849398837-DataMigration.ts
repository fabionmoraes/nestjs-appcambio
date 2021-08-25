import { MigrationInterface, QueryRunner } from 'typeorm';

export class DataMigration1629849398837 implements MigrationInterface {
  name = 'DataMigration1629849398837';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`appexchange\`.\`roles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`appexchange\`.\`files\` (\`id\` int NOT NULL AUTO_INCREMENT, \`file\` varchar(255) NULL, \`name\` varchar(255) NULL, \`type\` varchar(255) NULL, \`subtype\` varchar(255) NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`appexchange\`.\`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`roleId\` int NULL, \`storeId\` char(36) NULL, \`fileId\` int NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`appexchange\`.\`stores\` (\`id\` char(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`cnpj\` varchar(255) NOT NULL, \`company\` varchar(255) NOT NULL, \`company_name\` varchar(255) NULL, \`zip_code\` varchar(255) NULL, \`address\` varchar(255) NOT NULL, \`state\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, \`phone\` varchar(255) NULL, \`email\` varchar(255) NULL, \`active\` tinyint NOT NULL DEFAULT 1, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`fileId\` int NULL, UNIQUE INDEX \`IDX_1b0c68bf8b79c9bf8076e378dd\` (\`cnpj\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`appexchange\`.\`customers\` (\`id\` char(36) NOT NULL, \`fullName\` varchar(255) NOT NULL, \`email\` varchar(255) NULL, \`phone\` varchar(255) NULL, \`phone_whatsapp\` varchar(255) NULL, \`birth\` datetime NULL, \`zip_code\` varchar(255) NULL, \`address\` varchar(255) NULL, \`state\` varchar(255) NULL, \`city\` varchar(255) NULL, \`active\` tinyint NOT NULL DEFAULT 1, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userCreatedId\` int NULL, \`userUpdatedId\` int NULL, \`storeId\` char(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`users\` ADD CONSTRAINT \`FK_368e146b785b574f42ae9e53d5e\` FOREIGN KEY (\`roleId\`) REFERENCES \`appexchange\`.\`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`users\` ADD CONSTRAINT \`FK_c82cd4fa8f0ac4a74328abe997a\` FOREIGN KEY (\`storeId\`) REFERENCES \`appexchange\`.\`stores\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`users\` ADD CONSTRAINT \`FK_5963070526d10e14038f83f1be7\` FOREIGN KEY (\`fileId\`) REFERENCES \`appexchange\`.\`files\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`stores\` ADD CONSTRAINT \`FK_f8ee245420dd1880cb8325b2e5f\` FOREIGN KEY (\`fileId\`) REFERENCES \`appexchange\`.\`files\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`,
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
      `ALTER TABLE \`appexchange\`.\`stores\` DROP FOREIGN KEY \`FK_f8ee245420dd1880cb8325b2e5f\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`users\` DROP FOREIGN KEY \`FK_5963070526d10e14038f83f1be7\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`users\` DROP FOREIGN KEY \`FK_c82cd4fa8f0ac4a74328abe997a\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`users\` DROP FOREIGN KEY \`FK_368e146b785b574f42ae9e53d5e\``,
    );
    await queryRunner.query(`DROP TABLE \`appexchange\`.\`customers\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_1b0c68bf8b79c9bf8076e378dd\` ON \`appexchange\`.\`stores\``,
    );
    await queryRunner.query(`DROP TABLE \`appexchange\`.\`stores\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`appexchange\`.\`users\``,
    );
    await queryRunner.query(`DROP TABLE \`appexchange\`.\`users\``);
    await queryRunner.query(`DROP TABLE \`appexchange\`.\`files\``);
    await queryRunner.query(`DROP TABLE \`appexchange\`.\`roles\``);
  }
}
