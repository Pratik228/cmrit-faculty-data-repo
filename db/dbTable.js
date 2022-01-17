exports.CREATE_USER_TABLE = `CREATE TABLE IF NOT EXISTS user(mailId varchar(255) NOT NULL PRIMARY KEY, password varchar(255) CHECK (CHAR_LENGTH(password)>8), role enum('0','1') DEFAULT '0')`;
exports.CREATE_DEPARTMENT_TABLE = `CREATE TABLE IF NOT EXISTS department(dId varchar(20) PRIMARY KEY, departmentName varchar(255) NOT NULL)`;
exports.CREATE_FACULTY_TABLE = `CREATE TABLE IF NOT EXISTS faculty(facultyId varchar(20) NOT NULL PRIMARY KEY, name varchar(255), dId varchar(20), mailId varchar(255), phoneNumber varchar(255), joiningDate Date, FOREIGN KEY(dId) REFERENCES department(dId))`;
exports.CREATE_AWARDS_TABLE = `CREATE TABLE IF NOT EXISTS awards(id int AUTO_INCREMENT PRIMARY KEY, facultyId varchar(20), category varchar(255), dId varchar(20), createdAt datetime default CURRENT_TIMESTAMP, level varchar(255), eventName varchar(255), type varchar(255),awardedBy varchar(255), sem varchar(255), result varchar(255), status varchar(255), date Date, description text, FOREIGN KEY(facultyId) REFERENCES faculty(facultyId), FOREIGN KEY(dId) REFERENCES department(dId) ON DELETE CASCADE ON UPDATE CASCADE)`;
exports.CREATE_RESEARCH_PROJECTS_TABLE = `CREATE TABLE IF NOT EXISTS research_projects(id int AUTO_INCREMENT PRIMARY KEY, facultyId varchar(20), NameofPI varchar(20), COtoPI varchar(255), sanctionDate Date, submissionDate Date,rcid varchar(255),status varchar(255), title varchar(255), proposedAmount varchar(255), durationYear varchar(255), amount varchar(255), objectives text, benefit text, AgencyName varchar(255), received varchar(255), level varchar(255), dId varchar(20), description text, createdAt datetime default CURRENT_TIMESTAMP, FOREIGN KEY(facultyId) REFERENCES faculty(facultyId) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY(dId) REFERENCES department(dId) ON DELETE CASCADE ON UPDATE CASCADE)`;
exports.CREATE_PATENT_TABLE = `CREATE TABLE IF NOT EXISTS patent(id int AUTO_INCREMENT PRIMARY KEY, facultyId varchar(20), dId varchar(20),NameofPI varchar(255), COtoPI varchar(255), grantDate Date, submissionDate Date, duration varchar(255), topic varchar(255), submissionName varchar(255), amount varchar(255), objectives text, benefit text, AgencyName varchar(255), earning varchar(255), level varchar(255),specification varchar(255),status varchar(255),commercialised varchar(255), description text, createdAt datetime default CURRENT_TIMESTAMP, FOREIGN KEY(facultyId) REFERENCES faculty(facultyId) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY(dId) REFERENCES department(dId) ON DELETE CASCADE ON UPDATE CASCADE)`;
exports.CREATE_RESULTS_TABLE = `CREATE TABLE IF NOT EXISTS results(id int AUTO_INCREMENT PRIMARY KEY, facultyId varchar(20), academicYear varchar(255), passPercentage varchar(255), fcd varchar(255), firstClass varchar(255), secondClass varchar(255), failures varchar(255), appeared varchar(255), passed varchar(255), resultDate Date, dId varchar(20), sem varchar(255), description text, createdAt datetime default CURRENT_TIMESTAMP, FOREIGN KEY(facultyId) REFERENCES faculty(facultyId) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY(dId) REFERENCES department(dId) ON DELETE CASCADE ON UPDATE CASCADE)`;
