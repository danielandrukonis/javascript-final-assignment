/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const body = document.querySelector('#output');
const div = document.createElement('div');
// const state = {};

const getBrandCarsAndModels = async () => {
    try {
        const response = await fetch(ENDPOINT);
        const data = await response.json();
        data.forEach((item) => {

            const brandItem = item.brand;
            const modelsItem = item.models;
            console.log(brandItem, modelsItem);
            
           


            const brand = document.createElement('div');
            brand.setAttribute("class", "property-card-brand");
            brand.textContent = brandItem;
            body.append(brand);

            const models = document.createElement('p');
            models.setAttribute("class", "property-card-models");
            models.textContent = modelsItem;
            brand.append(models);

            
        });
    } catch (error) {
        console.log(error);
    }
};


getBrandCarsAndModels();

