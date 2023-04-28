-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "bar_code" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_bar_code_key" ON "Users"("bar_code");
