import { MigrationInterface, QueryRunner } from 'typeorm';

export class addFileIdStore1629763322222 implements MigrationInterface {
  name = 'addFileIdStore1629763322222';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`stores\` ADD \`fileId\` int NULL`,
    );

    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`stores\` ADD CONSTRAINT \`FK_f8ee245420dd1880cb8325b2e5f\` FOREIGN KEY (\`fileId\`) REFERENCES \`appexchange\`.\`files\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`stores\` DROP FOREIGN KEY \`FK_f8ee245420dd1880cb8325b2e5f\``,
    );

    await queryRunner.query(
      `ALTER TABLE \`appexchange\`.\`stores\` DROP COLUMN \`fileId\``,
    );
  }
}
