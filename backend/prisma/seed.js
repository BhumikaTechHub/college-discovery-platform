const { PrismaClient }
= require("@prisma/client");

const prisma =
new PrismaClient();

async function main(){

 await prisma.college.createMany({

  data:[

   {
    name:"IIT Delhi",
    location:"Delhi",
    fees:250000,
    rating:4.8,
    overview:"Top engineering college"
   },

   {
    name:"BITS Pilani",
    location:"Pilani",
    fees:550000,
    rating:4.7,
    overview:"Private engineering institute"
   }

  ]

 });

}

main();