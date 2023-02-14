class room {
    name;
    length;
    width;
    available = true;
    capacity = 15;

    constructor(name, length, width, capacity) {
        this.name = name;
        this.length = length;
        this.width = width;
        if (!capacity)
            this.capacity = 15;
        else
            this.capacity = capacity;
    }

    getArea() {
        return this.length * this.width;
    }

    getPermiter() {
        return 2 * (length + width);
    }

}

const room1 = new room('Sun', 30, 20);
const room2 = new room('Green', 15, 20, 18);
room2.available = false;
console.log(`${room1.name} ${room1.length} ${room1.width} ${room1.available} ${room1.capacity}`);
console.log(`${room2.name} ${room2.length} ${room2.width} ${room2.available} ${room2.capacity}`);