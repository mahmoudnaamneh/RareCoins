// user.model.ts

export class User {
     email: string
     password: string
     name: string
     gender: string
     image: string
    constructor(email: string, password: string, name: string, gender: string) 
    {
      this.email=email
      this.password=password
      this.name=name
      this.gender=gender
      if(gender=='male'){
         this.image='/assets/male.jpg'
      }
      else{
        this.image='/assets/female.jpg'
      }
    }
    getImage(){
      return this.image
    }
    setEmail(email:string){
      this.email=email
    }
    setPassword(password:string){
      this.password=password
    }
    setFullName(name:string){
      this.name=name
    }
    getEmail(){
      return this.email
    }
    getPassword(){
      return this.password
    }
    getFullName(){
     return this.name
    }
    getGender(){
      return this.gender
    }
    toString(): string {
      return `${this.name} (${this.email})`;
    }
  }
  