export interface Diver {
  database: string;
  password: string;
  port: number;
  connect(): void;
  disconnect(): void;
  query(sql: string): void;
}
class MySql implements Diver {
  database: string;
  password: string;
  port: number;
  constructor(database: string, password: string, port: number) {
    this.database = database;
    this.password = password;
    this.port = port;
  }
  connect(): void {
    console.log(`conectando a ${this.database}...`);
  }
  disconnect(): void {
    console.log(`desconectando de ${this.database}...`);
  }
  query(sql: string): void {
    console.log(`ejecutando consulta ${sql}...`);
  }
}
