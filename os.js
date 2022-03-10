const os=require("os");
// console.log(os);

//returns the underlying architecture
let mySystemArch=os.arch();
// console.log(mySystemArch);

//returns information on the cpus
let myCpuInfo=os.cpus();
// console.log(myCpuInfo);

// Returns the hostname of the operating system as a string
let hostName=os.hostname();
// console.log(hostName);

//returns an object containing network interfaces that have been assigned a network address
let networkInfo=os.networkInterfaces();
// console.log(networkInfo);

//Returns the operating system as a string
console.log(os.release());

//Returns the platform node js was compiled for
console.log(os.platform());

//Returns the operating system name
console.log(os.type());

//Returns the total amount of system memory in bytes as a integer
console.log(os.totalmem());

//Returns the system uptime in number of seconds
console.log(os.uptime());

// let uptimeInHours=os.uptime()/3600;
// console.log(uptimeInHours());

//Returns information about the currently effective user
console.log(os.userInfo());