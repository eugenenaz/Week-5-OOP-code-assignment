class RoomMate {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
    discribe() {
        return `${this.name} staysIn ${this.number}.`;
    }
}

class apartmentNum {
    constructor(apt2) {
        this.apt2 = apt2;
        this.rooms = [];
    }

    addRoomMate(roomMate) {
        if (roomMate instanceof RoomMate) {
            this.rooms.push(roomMate);
        } else {
            throw new Error(`Try again. Argument is not a roommate: ${roomMate}`);
        }
    }

    describe() {
        return `${this.name} has ${this.rooms.length} rooms.`;
    }
}

class Menu {
    constructor(){
        this.apartments = [];
        this.selectedApartment = null;
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createApartmentNum();
                    break;
                case '2':
                    this.viewApartment();
                    break;
                case '3':
                    this.deleteApartment();
                    break;
                case '4':
                    this.displayApartments();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!'); 
    }

    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create new apartment
        2) View apartment
        3) Delete apartment
        4) Display all apartment
        `);
    }
    showApartmentMenuOptions(apartmentInfo) {
        return prompt(`
        0) Back
        1) Create room
        2) Delete room
        ----------------------
        ${apartmentInfo}
        `);
    }


    displayApartments() {
        let roomString = '';
        for (let i = 0; i < this.apartments.length; i++) {
            roomString += i + ') ' + this.apartments[i].name + '\n';
        }
        alert(roomString);
    }

    createApartmentNum() {
        let name = prompt('Enter name for new apartment:');
        this.apartments.push(new apartment(name));
    }

    viewApartment() {
        let index = prompt('Enter the number of the apartment you wish to view:');
        if (index > -1 && index < this.apartments.length) {
            this.selectedApartment = this.apartments[index];
            let description = 'Apartment name: ' + this.selectedApartment.name + '\n';

            for (let i = 0; i < this.selectedApartment.rooms.length; i++) {
                description += i + ') ' + this.selectedApartment.rooms[i].name 
                + ' - ' + this.selectedApartment.rooms[i].number + '\n';
            }

            let selection = this.showApartmentMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createApartmentNum();
                    break;
                case '2':
                    this.deleteApartment();
            }
        }
        
    }

    createApartmentNum() {
        let name = prompt('Enter name of new apartment:');
        let number = prompt('Enter number for new apartment:');
        this.selectedApartment.apartments.push(new RoomMate(name, number));
    }

     deleteApartment() {
         let index = prompt('Enter the name of the apartment you wish to delete:');
         if (index > -1 && index < this.selectedApartment.apartments.length) {
            this.selectedApartment.apartments.splice(index, 1);
         }

     }
}




let menu = new Menu();
menu.start();
