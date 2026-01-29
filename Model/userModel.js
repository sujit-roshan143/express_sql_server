import db from "../Db/db.js";

const table = "users";

class userModel{ 
    static async createuserModel({name,email,passwords}){
        const sql=`INSERT INTO ${table} (name,email,passwords) values(?,?,?)`

        const[result]= await db.execute(sql,[name,email,passwords])

        return result.insertId;
    }

}

export default userModel
