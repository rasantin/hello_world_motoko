actor {
  public query func greet(name : Text) : async Text {
    return "Olá, " # name # "! \nSeja bem-vindo !";
  };
};
