import { MigrationInterface, QueryRunner } from 'typeorm';

export class UsersMigrations1629555636614 implements MigrationInterface {
  name = 'UsersMigrations1629555636614';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`nestjs\`.\`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`nestjs\`.\`users\``,
    );
    await queryRunner.query(`DROP TABLE \`nestjs\`.\`users\``);
  }
}
