import { expect } from "chai";
import data from '../data/testdata';

const selectors = {
    findOwnerLink: "a[href='/owners/find']",
    addOwnerButton: 'a.btn.btn-default',
    firstNameInput: 'input#firstname',
    lastNameInput: 'input#lastname',
    addressInput: 'input#address',
    cityInput: 'input#city',
    telephoneInput: 'input#telephone',
    addOwnerButton2: 'button.btn.btn-default',
    addPetButton1: '/html/body/div/div/a[2]',
    addPetButton2: 'button.btn.btn-default',
    petName: 'input#name.form-control',
    birthDate: 'input#birthDate.form-control',
    petTypes: 'select#type',
    petType: 'select#type',
    petTypeOptions: '//*[@id="type"]/option'
}

class PetDetailsPage {

    constructor() {
        selectors;
    }

    public async navigateToFindOwnerPage() {
        await browser.$(selectors.findOwnerLink).click();
        await browser.pause(1000);
    }

    public async navigateToAddOwnerPage() {
        await browser.$(selectors.addOwnerButton).click();
        await browser.pause(1000);
    }

    public async addingNewOwner() {
        await browser.$(selectors.firstNameInput).addValue(data.TestData.OwnerDetails.firstName);
        await browser.pause(1000);
        await browser.$(selectors.lastNameInput).addValue(data.TestData.OwnerDetails.lastName);
        await browser.pause(1000);
        await browser.$(selectors.addressInput).addValue(data.TestData.OwnerDetails.address);
        await browser.pause(1000);
        await browser.$(selectors.cityInput).addValue(data.TestData.OwnerDetails.city);
        await browser.pause(1000);
        await browser.$(selectors.telephoneInput).addValue(data.TestData.OwnerDetails.telephone);
        await browser.pause(1000);
        await browser.$(selectors.addOwnerButton2).click();
        await browser.pause(1000);
    }

    public async navigateToAddPetPage() {
        await browser.$(selectors.addPetButton1).click();
        await browser.pause(1000);
    }

    public async addingPet() {
        await browser.$(selectors.petName).addValue(data.TestData.PetDetails.petName);
        await browser.pause(1000);
        await browser.$(selectors.birthDate).addValue(data.TestData.PetDetails.dob);
        await browser.pause(1000);
    }
    // public async verifyPetDetails() {

    //     let list = await browser.$(selectors.petType).getText();
    //     list = list.replaceAll("\n","").replace(/ +/g, ' ');
    //     let petName='';
    //     for(let i=1; i<(list.length); i++){
    //         if(list[i]!=" ") {
    //             petName = petName + list[i];
    //         } else {
    //             data.TestData.ActualPetDetails.push(petName.toString());
    //             petName='';
    //         }
    //     }
    //     for(let i=0; i<data.TestData.ActualPetDetails.length; i++){
    //         expect(data.TestData.ExpectedPetTypes[i]).to.equal(data.TestData.ActualPetDetails[i]);
    //     }
    // }

    //public async verifyPetDetails() {
    //      const list = await (await browser.$(selectors.petTypes)).getText();
    //      console.log("checking list");
    //      console.log(list.length);
    //      for(let i=0; i<list.length; i++){
    //                 //expect(data.TestData.PetTypes[i-1]).to.equal(list[i]);
    //                 console.log(list[i]);
    //             }
    //}
    //     //await browser.$("select#value").selectByVisibleText("cat")
    //   // await this.type.selectByVisibleText("cat")
    //     //await browser.pause(5000);
    //     console.log(list.length);
    //     for(let i=1; i<=list.length; i++){
    //         expect(data.TestData.PetTypes[i-1]).to.equal(list[i]);
    //     }
       
    //         const select = await $('#type');
    //         console.log(await select.getText());
    //         await select.selectByVisibleText('cat');
    //         console.log(await select.getText()); 
            
    //         await browser.$(selectors.addPetButton2).click();
    //         await browser.pause(1000);
    //    }

       public async verifyPetDetails() {

        let optionCount = await ($$(selectors.petTypeOptions)).length;

        for(let i=1; i<=optionCount; i++) {

            let type = await (await $(selectors.petTypeOptions+"["+i+"]")).getText();

            data.TestData.ActualPetDetails.push(type);

        }

        console.log(data.TestData.ExpectedPetTypes);

        console.log(data.TestData.ActualPetDetails);

        expect(data.TestData.ExpectedPetTypes.length).to.equal(data.TestData.ActualPetDetails.length);

        for(let i=0; i<data.TestData.ActualPetDetails.length; i++){

            expect(data.TestData.ExpectedPetTypes[i]).to.equal(data.TestData.ActualPetDetails[i]);

        }

    }
        //expect(data.TestData.PetTypes).to.equal(list);
    
}
export const petDetailsPage = new PetDetailsPage();