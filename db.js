const sequelize = require("sequelize")
const db=new sequelize({
dialect: "sqlite",
storage: __dirname + '/tasks.db'

})
const todos = db.define("todos",{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    task:{
        type: sequelize.STRING(100),
        allowNull: false,

    },
    done:{
        type: sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false

    },
    priority:{
        type: sequelize.STRING(20),
    },
    due:{
        type: sequelize.STRING(20),
           
    },
    description:{
type: sequelize.STRING(500),
    },
    
});
const notes = db.define("notes",{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    note:{
        type: sequelize.STRING(200),
         },
  
    
});
todos.hasMany(notes,{
    foreignKey:'main_id',
    allowNull: false,
  })
module.exports={
    db,todos,notes
}