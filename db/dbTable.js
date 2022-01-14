exports.CREATE_USER_TABLE = `CREATE TABLE IF NOT EXISTS user(mailId varchar(255) NOT NULL PRIMARY KEY, password varchar(255) CHECK (CHAR_LENGTH(password)>8), role enum('0','1') DEFAULT '0')`;
exports.CREATE_DEPARTMENT_TABLE = `CREATE TABLE IF NOT EXISTS department(dId int NOT NULL AUTO_INCREMENT PRIMARY KEY, departmentName varchar(255) NOT NULL)`;
exports.CREATE_FACULTY_TABLE = `CREATE TABLE IF NOT EXISTS faculty(facultyId varchar(255) NOT NULL PRIMARY KEY, name varchar(255), dId int, mailId varchar(255), phoneNumber varchar(255), joiningDate Date, role varchar(255), FOREIGN KEY(dId) REFERENCES department(dId))`;
exports.CREATE_AWARDS_TABLE = `CREATE TABLE IF NOT EXISTS awards(awardsId int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), category varchar(255), dId int, filterDate Date, level varchar(255), eventName varchar(255), awardedBy varchar(255), sem varchar(255), result varchar(255), status varchar(255), date Date, description text, FOREIGN KEY(facultyId) REFERENCES faculty(facultyId), FOREIGN KEY(dId) REFERENCES department(dId) ON DELETE CASCADE ON UPDATE CASCADE)`;
exports.CREATE_FACULTY_SERVED_AS_TABLE= `CREATE TABLE IF NOT EXISTS faculty_served_as(sId int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), college_university_name varchar(255), Eventname varchar(255), startDate Date, endDate Date, servedAs varchar(255), activityType varchar(255), description text, filterDate Date, FOREIGN KEY(facultyId) REFERENCES faculty(facultyId) ON DELETE CASCADE ON UPDATE CASCADE)`;
exports.CREATE_PATENT_TABLE = `CREATE TABLE IF NOT EXISTS patent(patId int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), NameofPI varchar(255), COtoPI varchar(255), grantDate Date, submissionDate Date, duration varchar(255), topic varchar(255), submissionName varchar(255), amount varchar(255), objectives text, benefit text, AgencyName varchar(255), earning varchar(255), level varchar(255),specification varchar(255),status varchar(255),commercialised varchar(255), description text, filterDate Date, FOREIGN KEY(facultyId) REFERENCES faculty(facultyId) ON DELETE CASCADE ON UPDATE CASCADE)`;
exports.CREATE_RESULTS_TABLE = `CREATE TABLE IF NOT EXISTS results(resultId int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), academicYear varchar(255), passPercentage varchar(255), fcd varchar(255), firstClass varchar(255), secondClass varchar(255), failures varchar(255), appeared varchar(255), passed varchar(255), resultDate Date, dId int, sem varchar(255), description text, filterDate Date, FOREIGN KEY(facultyId) REFERENCES faculty(facultyId) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY(dId) REFERENCES department(dId) ON DELETE CASCADE ON UPDATE CASCADE)`;     


   

