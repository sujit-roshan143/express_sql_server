import db from "../Db/db.js";

const table = "users";

class userModel{ 
    static async createuserModel({name,email,passwords}){
        const sql=`INSERT INTO ${table} (name,email,passwords) values(?,?,?)`

        const[result]= await db.execute(sql,[name,email,passwords])

        return result.insertId;
    }
    static async getAlluserModels(){
        const sql = `SELECT * FROM ${table}`
        const[rows]= await db.execute(sql)
        return rows;
    }
    static async updateuserPasswordsModel(id,{passwords}){
        const sql = `UPDATE ${table} SET passwords=? WHERE id=?`;
        const [update]=await db.execute(sql,[passwords,id]);
        return update.affectedRows;

    }
    static async DeleteRowsModel(id){
        const sql = `DELETE FROM ${table} WHERE id=?`;
        const [resl]= await db.execute(sql,[id]);
        return resl.affectedRows;
    }

}

export default userModel
