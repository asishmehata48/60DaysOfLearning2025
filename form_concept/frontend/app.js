const studentProto = {
    greet() {
        console.log(`Hi, I’m ${this.name} from ${this.city}.`);
    },
    isAdult() {
        return this.age >= 18;
    }
};

const stu1 = Object.create(studentProto);
stu1.name = 'John';
stu1.age = 25;
stu1.city = 'New York';

const stu2 = Object.create(studentProto);
stu2.name = 'Robert';
stu2.age = 23;
stu2.city = 'Chicago';

const stu3 = Object.create(studentProto);
stu3.name = 'Alice';
stu3.age = 27;
stu3.city = 'Los Angeles';

stu1.greet();
console.log(stu1.isAdult());

stu2.greet();
console.log(stu2.isAdult());

stu3.greet();
console.log(stu3.isAdult());
