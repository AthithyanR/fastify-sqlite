import sqlite3 from 'sqlite3'
import { open } from 'sqlite';

const db = await open({
    filename: './db.db',
    driver: sqlite3.Database
})

await db.run(`
    create table if not exists store (
        id text primary key,
        data text not null
    )
`)

export default db;
