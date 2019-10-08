const Sequelize = require('sequelize');
const conn =  new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/acmeschools');
const { TEXT, DECIMAL, STRING, UUID, UUIDV4} = Sequelize;


const School = conn.define('school', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    unique: true,
    primaryKey: true
  },
  name: {
    type: STRING,
    allowNull: false
  },
  imageURL: {
    type: TEXT,
    allowNull: false
  }
});

const Student =  conn.define ('student', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    unique: true,
    primaryKey: true
  },
  firstName: {
    type: STRING,
    allowNull: false
  },
  lastName: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  gpa: {
    type: DECIMAL
  }
});

Student.belongsTo(School, {as: 'school'});
School.hasMany(Student);

const syncAndSeed = async() =>{
  await conn.sync ({force: true});
  const [cp, usc, cal, mit] = await Promise.all([
    School.create({
      name: 'Cal Poly',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Cal_Poly_Mustangs_logo.svg/2560px-Cal_Poly_Mustangs_logo.svg.png'
    }),
    School.create({
      name: 'USC',
      imageURL: 'https://ca-times.brightspotcdn.com/dims4/default/6a3a9b7/2147483647/strip/true/crop/1548x871+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fca-times.brightspotcdn.com%2F81%2F7f%2F9963576d6219c441c5d1e339361c%2Flat-sp-usc-full-logo-20140126'
    }),
    School.create({
      name: 'Cal Berkley',
      imageURL: 'https://cdn.shopify.com/s/files/1/0135/6222/products/Screen_Shot_2018-09-21_at_4.17.37_PM_1024x1024.png?v=1537575752'
    }),
    School.create({
      name: 'MIT',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/642px-MIT_logo.svg.png'
    }),
]);
  await Student.create ({
    firstName: 'Emma', lastName: 'G', email: 'emmag@gmail.com', gpa: 4.1, schoolId: cal.id
  });
  await Student.create ({
    firstName: 'Barry', lastName: 'Allen', email: 'flash@gmail.com', gpa: 4.0, schoolId: cal.id
  });
  await Student.create ({
    firstName: 'Oliver', lastName: 'Queen', email: 'garrow@gmail.com', gpa: 3.1
  });
  await Student.create ({
    firstName: 'Tony', lastName: 'Stark', email: 'ironman@gmail.com', gpa: 4.5, schoolId: cal.id
  })
  await Student.create ({
    firstName: 'Thor', lastName: 'Odinson', email: 'thor@gmail.com', gpa: 3.5, schoolId: cp.id
  });
  await Student.create ({
    firstName: 'Bruce', lastName: 'Wayne', email: 'bwayne@gmail.com', gpa: 4.5, schoolId: mit.id
  });
  await Student.create ({
    firstName: 'Diana', lastName: 'Prince', email: 'princessD@gmail.com', gpa: 3.7, schoolId: usc.id
  });
};


module.exports = {
  syncAndSeed,
  models: {
    School,
    Student
  }
};
