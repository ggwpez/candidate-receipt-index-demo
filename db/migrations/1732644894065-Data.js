module.exports = class Data1732644894065 {
    name = 'Data1732644894065'

    async up(db) {
        await db.query(`CREATE TABLE "candidate_receipt" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "core_index" integer, "group_index" integer, CONSTRAINT "PK_686cb798f229406284bde328307" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_1ab100cd7e7174db9f93b74a97" ON "candidate_receipt" ("block_number") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "candidate_receipt"`)
        await db.query(`DROP INDEX "public"."IDX_1ab100cd7e7174db9f93b74a97"`)
    }
}
