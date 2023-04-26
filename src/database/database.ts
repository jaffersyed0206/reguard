import { Sequelize } from 'sequelize-typescript';

// connection params to the users Schema
const HOST: string = process.env.HOST || "HOST";
const USER: string = process.env.DB_USER || "USER";
const PASSWORD: string = process.env.PASSWORD || "PASSWORD";
const PORT: number = 5432;
const DATABASE: string = process.env.DATABASE || "DATABASE";

console.log(
    `HOST: ${HOST}, USER: ${USER}, PASSWORD: ${PASSWORD}, PORT: ${PORT}, DATABASE: ${DATABASE}`
)

const REGUARD_DB = new Sequelize({
    host: HOST,
    username: USER,
    password: PASSWORD,
    port: PORT,
    database: DATABASE,
    dialect: 'postgres',
})

export default REGUARD_DB;