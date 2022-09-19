export class Rock {

  id: number;
  name: string;
  element: string;
  planet: string;
  properties: string;
  tips: string | null;


  constructor(id: number = 0, name: string = "", element: string = "", planet: string = "", properties: string ="", tips: string =""){
    this.id = id;
    this.name = name;
    this.element = element;
    this.planet = planet;
    this.properties = properties;
    this.tips = tips;
  }

}
