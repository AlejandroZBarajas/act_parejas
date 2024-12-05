  export class Transformation {
    id: number;
    ki:number;
    name: string;
    image: string;
    characterName: string; // Nueva propiedad para asociar la transformación con un personaje
  
    constructor(data: Partial<Transformation>) {
      this.id = data.id || 0;
      this.ki = data.ki || 0 
      this.name = data.name || '';
      this.image = data.image || '';
      this.characterName = data.characterName || ''; // Inicializa con un valor por defecto
    }
  
    getInformation(): string {
      return `${this.id}, ${this.name}, ${this.ki} ${this.image}, ${this.characterName}`;
    }
  }
  