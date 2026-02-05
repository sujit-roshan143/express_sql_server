import db from '../Db/db.js'


const table="users"
class AuthUserModel{
    static async UserLoginModel(email){
        const sql=`SELECT * FROM ${table} WHERE email=?`
        const [rows] = await db.execute(sql[email])
        return rows[0];

    }
    static async UserSignupModel({name,email,passwords}){
        const sql = `INSERT INTO ${table}(name,email,passwords) VALUES (?,?,?)`
        const [insert] = await db.execute(sql,[name,email,passwords])
        return [insert].insertId;
    }
}

export default AuthUserModel 